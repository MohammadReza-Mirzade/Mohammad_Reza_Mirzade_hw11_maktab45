const fs = require('fs');
var r1 = fs.readFileSync("../file/from.txt", 'utf8');
var r2 = fs.readFileSync("../file/append.txt", 'utf8');
var w1 = fs.appendFileSync('../file/to.txt', r1);
var w2 = fs.appendFileSync('../file/to.txt', r2);