const fs = require('fs');


fs.readFile('./file/names.txt', 'utf8', (err, data1) => {
    if (err){ console.log(err.message); }
    else{

        let lines = data1.split("\n");
        let users = [];
        lines.forEach(function (line){
            users.push(line.replace("\r", "").split("-"));
        });




        fs.readFile('./file/numbers.txt', 'utf8', (err, data2) => {
            if (err){ console.log(err.message); }
            else{

                let lines = data2.split("\n");
                lines.forEach(function (line){
                    let index = users.findIndex(function (value){
                        return value[0] ===  line.split("-")[0];
                    });
                    if (index !== -1) {
                        users[index].push(line.replace("\r", "").split("-")[1]);
                    }
                });

                let data3 = "";

                users.forEach(function (value, index, array){
                    if (value.length === 2){
                        data3 += value[1] + " hasn't any phone number.\n";
                    } else if (value.length === 3){
                        data3 += value[1] + "\'s phone number is " + value[2] + "\n";
                    } else {
                        data3 += value[1] + "\'s phone numbers are " + value[2];
                        for (let i = 3; i < value.length; i++){
                            data3 += "," + value[i];
                        }
                        data3 += "\n";
                    }
                })


                fs.writeFile('./file/newFile.txt', data3, err => {
                    if (err){ console.log(err.message); }
                });

            }
        });

    }
});

