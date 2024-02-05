const request = require("request");
const fs = require("fs");

// Get command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make HTTP request
request(url, (error, response, body) => {
  if (error) {
    console.error("Error downloading the file:", error);
    return;
  }

  // Write to local file
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error("Error writing to local file:", err);
      return;
    }

    // Get file size
    const fileSize = Buffer.byteLength(body, "utf8");

    // Print success message
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  });
});
