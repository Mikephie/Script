const fs = require('fs');

// Get the current date
const currentDate = new Date();

// Convert to Unix timestamp in milliseconds
const PURCHASE_DATE_MS = currentDate.getTime().toString();

// Format the date to "YYYY-MM-DD HH:MM:SS Etc/GMT"
const PURCHASE_DATE = currentDate.toISOString().replace('T', ' ').split('.')[0] + " Etc/GMT";

// Path to the file you want to update (replace 'your-file.js' with your actual file)
const filePath = 'qx/dates.js';

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// Update the file content with new dates
content = content.replace(/const PURCHASE_DATE_MS = ".*?";/, `const PURCHASE_DATE_MS = "${PURCHASE_DATE_MS}";`);
content = content.replace(/const PURCHASE_DATE = ".*?";/, `const PURCHASE_DATE = "${PURCHASE_DATE}";`);

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf-8');

console.log("Updated purchase dates successfully.");
