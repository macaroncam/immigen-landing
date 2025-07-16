import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the project root for the service account file
const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'google-service-account.json');
const PARENT_FOLDER_ID = '0ANQvrfSLGtPOUk9PVA'; // <-- Updated to your new shared drive folder ID

// Authenticate with Google Drive
function getDriveService() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
  return google.drive({ version: 'v3', auth });
}

// Create a subfolder for each submission
export async function createSubmissionFolder(folderName: string) {
  const drive = getDriveService();
  const res = await drive.files.create({
    requestBody: {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [PARENT_FOLDER_ID],
    },
    fields: 'id',
    supportsAllDrives: true,
  });
  return res.data.id;
}

// Upload a file to a folder
export async function uploadFileToFolder(folderId: string, filePath: string, mimeType: string, fileName: string) {
  const drive = getDriveService();
  const fileMetadata = {
    name: fileName,
    parents: [folderId],
  };
  const media = {
    mimeType,
    body: fs.createReadStream(filePath),
  };
  const res = await drive.files.create({
    requestBody: fileMetadata,
    media,
    fields: 'id, webViewLink',
    supportsAllDrives: true,
  });
  return res.data;
}
