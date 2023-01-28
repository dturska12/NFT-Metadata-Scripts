// Removes dashes from file names in a directory
const fs = require("fs");

const directoryPath = "";

// Get a list of all files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Error reading directory: ", err);
        return;
    }

    // Iterate through each file
    files.forEach((file) => {
        // Check if the file name contains a dash
        if (file.includes("-")) {
            // Replace the dash with an underscore
            const newFileName = file.replace(/-/g, "_");
            // Rename the file with the new file name
            fs.rename(`${directoryPath}/${file}`, `${directoryPath}/${newFileName}`, (renameError) => {
                if (renameError) {
                    console.error("Error renaming file: ", renameError);
                }
            });
        }
    });
});
