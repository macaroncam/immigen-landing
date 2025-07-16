import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createObjectCsvWriter } from "csv-writer";
import multer from "multer";
import { createSubmissionFolder, uploadFileToFolder } from "../googleDrive";
import csvParser from 'csv-parser';

const csvPath = path.join(__dirname, "../../early-access.csv");

const csvWriter = createObjectCsvWriter({
  path: csvPath,
  header: [
    { id: "firstName", title: "First Name" },
    { id: "lastName", title: "Last Name" },
    { id: "companyName", title: "Company Name" },
    { id: "jobTitle", title: "Job Title" },
    { id: "email", title: "Email" },
    { id: "citizenship", title: "Citizenship" },
    { id: "timestamp", title: "Timestamp" },
  ],
  append: true,
});

// Ensure the CSV has the correct header row
function ensureCsvHasHeader(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(csvPath)) {
      // If file doesn't exist, create it with header
      fs.writeFileSync(csvPath, 'First Name,Last Name,Company Name,Job Title,Email,Citizenship,Timestamp\n');
      return resolve();
    }
    // Read the first line
    const firstLine = fs.readFileSync(csvPath, 'utf8').split('\n')[0];
    const expectedHeader = 'First Name,Last Name,Company Name,Job Title,Email,Citizenship,Timestamp';
    if (firstLine.trim() !== expectedHeader) {
      // Prepend the header if missing
      const data = fs.readFileSync(csvPath, 'utf8');
      fs.writeFileSync(csvPath, expectedHeader + '\n' + data);
    }
    resolve();
  });
}

// Helper to check if email exists in CSV
async function emailExistsInCsv(email) {
  await ensureCsvHasHeader();
  return new Promise((resolve, reject) => {
    let found = false;
    fs.createReadStream(csvPath)
      .pipe(csvParser())
      .on('data', (row) => {
        if (row.Email === email) found = true;
      })
      .on('end', () => resolve(found))
      .on('error', reject);
  });
}

// Configure multer to store files temporarily in /tmp
const upload = multer({ dest: "/tmp" });

export const handleEarlyAccess = [
  upload.single("cv"), // "cv" is the name of the file input in your form
  async (req, res) => {
    console.log("Received early access form submission");
    const { firstName, lastName, companyName, jobTitle, email, citizenship } = req.body;
    if (!firstName || !lastName || !companyName || !jobTitle || !email || !citizenship || !req.file) {
      return res.status(400).json({ error: "Missing required fields or CV" });
    }

    // Check for duplicate email
    try {
      if (await emailExistsInCsv(email)) {
        return res.status(400).json({ error: "This email has already submitted." });
      }
    } catch (err) {
      console.error('Error checking CSV for email:', err);
      return res.status(500).json({ error: "Failed to check for duplicate email." });
    }

    // Create a unique folder name
    const folderName = `${firstName}_${lastName}_${Date.now()}`;
    try {
      // 1. Create a folder in Google Drive
      const folderId = await createSubmissionFolder(folderName);

      // 2. Upload the CV PDF
      const cvFile = req.file;
      await uploadFileToFolder(folderId, cvFile.path, cvFile.mimetype, cvFile.originalname);

      // 3. Create and upload metadata file
      const metadata = {
        firstName,
        lastName,
        companyName,
        jobTitle,
        email,
        citizenship,
        timestamp: new Date().toISOString(),
      };
      const metadataPath = path.join("/tmp", `${folderName}_metadata.json`);
      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
      await uploadFileToFolder(folderId, metadataPath, "application/json", "metadata.json");

      // 4. Save to CSV as before
      await csvWriter.writeRecords([
        {
          ...metadata,
        },
      ]);

      // 5. Clean up temp files
      fs.unlinkSync(cvFile.path);
      fs.unlinkSync(metadataPath);

      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err); // This will print the error to your backend terminal
      res.status(500).json({ error: "Failed to save data" });
    }
  }
]; 