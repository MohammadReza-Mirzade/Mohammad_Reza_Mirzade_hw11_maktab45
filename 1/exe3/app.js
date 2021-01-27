const fs = require('fs');

fs.readFile('../file/from.txt', 'utf8', (err, data1) => {
    if (err){ console.log(err.message); }
    else{
        fs.appendFile('../file/to.txt', data1, err => {
            if (err){ console.log(err.message); }
            else {
                fs.readFile('../file/append.txt', 'utf8', (err, data2) => {
                    if (err){ console.log(err.message); }
                    else{
                        fs.appendFile('../file/to.txt', data2, err => {
                            if (err){ console.log(err.message); }
                        });
                    }
                });
            }
        });
    }
});