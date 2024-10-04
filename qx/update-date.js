const fs = require('fs');
const filePath = 'qx/iTunestest.js';

// Check if the file exists
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

// Log that the file was found
console.log(`File found: ${filePath}`);

// Get the current date
const currentDate = new Date();

// Convert to Unix timestamp in milliseconds
const PURCHASE_DATE_MS = currentDate.getTime().toString();

// Format the date to "YYYY-MM-DD HH:MM:SS Etc/GMT"
const PURCHASE_DATE = currentDate.toISOString().replace('T', ' ').split('.')[0] + " Etc/GMT";

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// Log the content before updating
console.log('Before update:', content);

// Update the file content with new dates
content = content.replace(/const PURCHASE_DATE_MS = ".*?";/, `const PURCHASE_DATE_MS = "${PURCHASE_DATE_MS}";`);
content = content.replace(/const PURCHASE_DATE = ".*?";/, `const PURCHASE_DATE = "${PURCHASE_DATE}";`);

// Log the content after updating
console.log('After update:', content);

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf-8');

console.log("Updated purchase dates successfully.");
