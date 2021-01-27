const fs = require('fs');
var w1 = fs.writeFileSync('../file/newFile.txt', "new file");
if (fs.existsSync("../file/newFile.txt")) {
    console.log("File exists.")
} else {
    console.log("File does not exist.")
}