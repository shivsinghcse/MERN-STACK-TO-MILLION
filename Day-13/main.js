// const file = require("./file");
// console.log(file.test);

const { test, test1, test2 } = require("./file");
console.log(test2);

// const string = require("./string");
// console.log(string);

const { converToSmallLetter, converToCapitalLetter } = require("./string");

console.log(converToCapitalLetter("small"));
console.log(converToSmallLetter("APPLE"));

const time = require("./time");
const currentDateTime = time.getCurrentDateTime("f");
console.log(currentDateTime);

const moment = require("moment");

const dt = moment();
console.log(dt);
// console.log(dt.format('DD-MM-YYYY'));
// console.log(dt.format('DD-MM-YYYY HH:MM:SS A'));
console.log(dt.format('DD-MM-YYYY hh:mm:ss A'));
console.log(dt.add(2, 'years').format('DD-MM-YYYY hh:mm:ss A'));
