function logName(firstName, lastName, log){
    log(firstName, lastName);
}

const FIRST_NAME = "MohammadReza";
const LAST_NAME = "Mirzade";

logName(FIRST_NAME, LAST_NAME, function (firstName, lastName){
    console.log(firstName + " " + lastName);
});