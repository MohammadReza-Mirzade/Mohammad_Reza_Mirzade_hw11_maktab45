const fs = require('fs');

fs.readFile('../file/from.txt', 'utf8', (err, data) => {
    if (err){ console.log(err.message); }
    else{
        fs.writeFile('../file/to.txt', data, err => {
            if (err){ console.log(err.message); }
        });
    }
});