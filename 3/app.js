r1.readFile('../file/numbers.txt', 'utf8', (err, data1) => {
    if (err){ console.log(err.message); }
    else{

        let lines = data1.split("\n");
        let numbers = [];
        lines.forEach(function (){
            numbers.push(lines.split("-"));
        });


        r2.readFile('../file/names.txt', 'utf8', (err, data2) => {
            if (err){ console.log(err.message); }
            else{

                let lines = data2.split("\n");
                let users = [];
                lines.forEach(function (){
                    users.push(lines.split("-"));
                });



                w1.writeFile('../file/newFile.txt', data3, err => {
                    if (err){ console.log(err.message); }
                });

            }
        });

    }
});

