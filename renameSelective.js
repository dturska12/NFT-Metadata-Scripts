//Rename only selected files
const fs = require('fs');
const path = require('path');

const folderPath = './surprise';
const fileNames = [];

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach((file, index) => {
        const filePath = path.join(folderPath, file);
        const newFilePath = path.join(folderPath, fileNames[index] + path.extname(file));
        fs.rename(filePath, newFilePath, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
});
