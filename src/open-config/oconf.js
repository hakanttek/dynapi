// Import the necessary modules for file system operations and path handling
const fs = require('fs');
const path = require('path');

let oconf = {};  // Initialize an empty oconf object

try {
  // Build the full path to the oconf.json file
  const oconfPath = path.join(__dirname, 'oconf.json');

  // Read the content of oconf.json file synchronously
  const rawData = fs.readFileSync(oconfPath);

  // Parse the JSON data and assign it to the oconf object
  oconf = JSON.parse(rawData);
} catch (err) {
  // If there's an error reading or parsing the file, log the error message
  console.error('Error reading oconf.json:', err.message);
}

module.exports = oconf;  // Export the oconf object to be used in other files
