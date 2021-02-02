const fs = require('fs');

fs.writeFile('../file/newFile.txt', "new file", err => {
    if (err){ console.log(err.message); }
});

fs.access(path, fs.F_OK, (err) => {
    if (err) {
        console.log("File does not exist.");
    } else {
        console.log("File exists.");
    }
});