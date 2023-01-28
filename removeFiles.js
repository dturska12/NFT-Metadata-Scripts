//Removes any file from the build folder thats listed in filesToRemove
const fs = require('fs');

const folderPath = 'path/to/folder';
const filesToRemove = [];

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach((file) => {
        const fileName = file.split('.')[0];
        if (filesToRemove.includes(parseInt(fileName))) {
            fs.unlink(`${folderPath}/${file}`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`${file} was removed`);
            });
        }
    });
});
