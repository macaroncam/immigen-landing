# Backend Setup for Google Drive Integration

This document explains how to set up your Node.js/Express backend to work with the frontend early access form.

## Required Dependencies

```bash
npm install express multer googleapis cors dotenv csv-writer csv-parser
npm install -D @types/express @types/multer @types/cors nodemon typescript
```

## Project Structure

```
backend/
├── server.js (or server.ts)
├── routes/
│   └── earlyAccess.js
├── services/
│   └── googleDriveService.js
├── middleware/
│   └── upload.js
├── data/
│   └── early-access.csv
├── temp/ (for temporary file uploads)
└── credentials/
    └── service-account-key.json
```

## Environment Variables

Create a `.env` file:

```env
PORT=3001
GOOGLE_APPLICATION_CREDENTIALS=./credentials/service-account-key.json
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here
CSV_FILE_PATH=./data/early-access.csv
FRONTEND_URL=http://localhost:5173
```

## 1. Express Server Setup (server.js)

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const earlyAccessRoutes = require('./routes/earlyAccess');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/early-access', earlyAccessRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## 2. Google Drive Service (services/googleDriveService.js)

```javascript
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

class GoogleDriveService {
  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });
    
    this.drive = google.drive({ version: 'v3', auth: this.auth });
  }

  async createUserFolder(userEmail, userName) {
    try {
      const folderName = `${userName}_${userEmail}_${Date.now()}`;
      
      const folderMetadata = {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID]
      };

      const folder = await this.drive.files.create({
        resource: folderMetadata,
        supportsAllDrives: true
      });

      return folder.data;
    } catch (error) {
      console.error('Error creating folder:', error);
      throw error;
    }
  }

  async uploadFile(filePath, fileName, folderId, mimeType) {
    try {
      const fileMetadata = {
        name: fileName,
        parents: [folderId]
      };

      const media = {
        mimeType: mimeType,
        body: fs.createReadStream(filePath)
      };

      const file = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        supportsAllDrives: true
      });

      return file.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async shareFolder(folderId, email) {
    try {
      await this.drive.permissions.create({
        fileId: folderId,
        resource: {
          role: 'reader',
          type: 'user',
          emailAddress: email
        },
        supportsAllDrives: true
      });
    } catch (error) {
      console.error('Error sharing folder:', error);
      // Don't throw here as this is optional
    }
  }
}

module.exports = new GoogleDriveService();
```

## 3. Multer Upload Middleware (middleware/upload.js)

```javascript
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure temp directory exists
const tempDir = './temp';
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: fileFilter
});

module.exports = upload;
```

## 4. Early Access Routes (routes/earlyAccess.js)

```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const csvWriter = require('csv-writer');
const upload = require('../middleware/upload');
const googleDriveService = require('../services/googleDriveService');

const router = express.Router();
const csvFilePath = process.env.CSV_FILE_PATH || './data/early-access.csv';

// Ensure CSV file and directory exist
const ensureCSVExists = () => {
  const dir = path.dirname(csvFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (!fs.existsSync(csvFilePath)) {
    const writer = csvWriter.createObjectCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'firstName', title: 'First Name' },
        { id: 'lastName', title: 'Last Name' },
        { id: 'email', title: 'Email' },
        { id: 'countryOfCitizenship', title: 'Country of Citizenship' },
        { id: 'visaType', title: 'Visa Type' },
        { id: 'timeline', title: 'Timeline' },
        { id: 'folderId', title: 'Google Drive Folder ID' },
        { id: 'fileName', title: 'CV File Name' },
        { id: 'submissionDate', title: 'Submission Date' }
      ]
    });
    
    writer.writeRecords([]).then(() => {
      console.log('CSV file created');
    });
  }
};

// Check if email exists
const checkEmailExists = (email) => {
  return new Promise((resolve, reject) => {
    const emails = [];
    
    if (!fs.existsSync(csvFilePath)) {
      resolve(false);
      return;
    }
    
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => {
        emails.push(data.email?.toLowerCase());
      })
      .on('end', () => {
        resolve(emails.includes(email.toLowerCase()));
      })
      .on('error', reject);
  });
};

// Add to CSV
const addToCSV = async (data) => {
  const writer = csvWriter.createObjectCsvWriter({
    path: csvFilePath,
    header: [
      { id: 'firstName', title: 'First Name' },
      { id: 'lastName', title: 'Last Name' },
      { id: 'email', title: 'Email' },
      { id: 'countryOfCitizenship', title: 'Country of Citizenship' },
      { id: 'visaType', title: 'Visa Type' },
      { id: 'timeline', title: 'Timeline' },
      { id: 'folderId', title: 'Google Drive Folder ID' },
      { id: 'fileName', title: 'CV File Name' },
      { id: 'submissionDate', title: 'Submission Date' }
    ],
    append: true
  });
  
  await writer.writeRecords([data]);
};

// Clean up temporary file
const cleanupTempFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error('Error cleaning up temp file:', error);
  }
};

// Routes
router.post('/check-email', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }
    
    ensureCSVExists();
    const exists = await checkEmailExists(email);
    
    res.json({
      success: true,
      exists: exists
    });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

router.post('/', upload.single('cvFile'), async (req, res) => {
  let tempFilePath = null;
  
  try {
    const {
      firstName,
      lastName,
      email,
      countryOfCitizenship,
      visaType,
      timeline
    } = req.body;
    
    // Validation
    if (!firstName || !lastName || !email || !countryOfCitizenship || !visaType || !timeline) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }
    
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'CV file is required'
      });
    }
    
    tempFilePath = req.file.path;
    
    // Check for duplicate email
    ensureCSVExists();
    const emailExists = await checkEmailExists(email);
    
    if (emailExists) {
      return res.status(409).json({
        success: false,
        error: 'This email has already been submitted. Please use a different email address.'
      });
    }
    
    // Create user folder in Google Drive
    const userName = `${firstName}_${lastName}`;
    const folder = await googleDriveService.createUserFolder(email, userName);
    
    // Upload CV to the folder
    const uploadedFile = await googleDriveService.uploadFile(
      tempFilePath,
      req.file.originalname,
      folder.id,
      req.file.mimetype
    );
    
    // Optional: Share folder with user
    try {
      await googleDriveService.shareFolder(folder.id, email);
    } catch (shareError) {
      console.warn('Could not share folder with user:', shareError.message);
    }
    
    // Add to CSV
    const submissionData = {
      firstName,
      lastName,
      email,
      countryOfCitizenship,
      visaType,
      timeline,
      folderId: folder.id,
      fileName: req.file.originalname,
      submissionDate: new Date().toISOString()
    };
    
    await addToCSV(submissionData);
    
    res.json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        folderId: folder.id,
        fileId: uploadedFile.id
      }
    });
    
  } catch (error) {
    console.error('Submission error:', error);
    
    let errorMessage = 'Internal server error';
    if (error.message.includes('duplicate') || error.message.includes('already exists')) {
      errorMessage = 'This email has already been submitted. Please use a different email address.';
    } else if (error.message.includes('file')) {
      errorMessage = 'Error uploading file. Please try again.';
    }
    
    res.status(500).json({
      success: false,
      error: errorMessage
    });
  } finally {
    // Clean up temporary file
    if (tempFilePath) {
      cleanupTempFile(tempFilePath);
    }
  }
});

module.exports = router;
```

## 5. Google Service Account Setup

1. Go to Google Cloud Console
2. Create a new project or select existing
3. Enable Google Drive API
4. Create a Service Account
5. Download the JSON key file
6. Place it in `credentials/service-account-key.json`
7. Share your Google Drive folder with the service account email

## 6. Frontend Environment Variable

Create `.env.local` in your frontend:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

## 7. Start the Backend

```bash
npm start
# or for development
npm run dev
```

Your backend will be running on `http://localhost:3001` and ready to receive form submissions from the frontend!

## Testing

You can test the API endpoints using curl:

```bash
# Check email
curl -X POST http://localhost:3001/api/early-access/check-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Health check
curl http://localhost:3001/health
```