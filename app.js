//* Mengetahui Chalk,Validator dan Yargs

const validator = require("validator");

//! Perlu di ingat bahwa ini adalah contoh salah satu pakcage di Npm yang bernama Validator
// console.log( validator.isEmail('falahalfarisi@gmail.com'));
// console.log(validator.isMobilePhone('098765','id-ID'));
console.log(validator.isNumeric("098765"));

//! Package Chalk untuk mendesign terminal
const chalk = require("chalk");

console.log(chalk.blueBright("Hello World"));
console.log(chalk.greenBright(true));
console.log(chalk.redBright(false));

// const p = false;
// const l = true;
// console.log(p);
// console.log(l);
