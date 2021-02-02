const fs = require('fs');
var r1 = fs.readFileSync("../file/from.txt", 'utf8');
var w1 = fs.writeFileSync('../file/to.txt', r1);