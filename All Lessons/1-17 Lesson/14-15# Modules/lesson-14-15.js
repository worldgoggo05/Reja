/*
// Module package CORE:
// file system is imported:
const fs = require("fs");
// set time out:
setTimeout(() => {
	console.log("--------------------------------");
	console.log("Set Time Out ishga tushdi!");
	console.log("--------------------------------");
}, 5000);

// set interval:
setInterval(() => {
	console.log("Set Interval ishga tushdi!");
}, 1000);

// File system:
// Get text data:
const data = fs.readFileSync("./input.txt", "utf8");
console.log(`This is old txt file rendered by fs: ${data}`);

// Write text data:
console.log("--------------------------------");
fs.writeFileSync("./input.txt", `${data} \n\t\t by Alex`);
const new_data = fs.readFileSync("./input.txt", "utf8");

console.log(`This is new txt file rendered by fs: ${new_data}`);

// ------------------------------------------------------------------------------------------------
// Module package EXTERNAL:
const moment = require("moment");
setInterval(() => {
	const time = moment().format("YYYY-MM-DD HH:mm:ss");
	console.log(`Time by moment: ${time}`);
}, 5000);

// Inquirer ------------------------------------------------------------------------------------------------
const inquirer = require("inquirer");
inquirer
	.prompt([{ type: "input", name: "raqam", message: "Raqamni kiriting:" }])
	.then((answers) => {
		console.log(`Men kiritgan raqam ${answers.raqam}`);
	})
	.catch((error) => {
		console.log(error);
	});
//

// Validator ---Checks-Data-Type-iS-Valid-----------------------------------------------------------------------------------------
const validator = require("validator");
const { isIP } = require("net");
console.log(validator.isEmail("alex@gmail.com"));
//Output : true ;
console.log(validator.isInt("123"));
//Output : true ;
console.log(isIP("192.168.1.1"));
//Output : true ;

// Uuid--Random-String-Generator---------------------------------------------------------------------------------------------
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
console.log(`Random UUID: ${uuid}`);
//Output : 123e4567-e89b-12d3-a456-426614174000 ;

// Nodemon-----------------------------------------------------------------------------------------------
// nodemon helps to restart server automatically
// nodemon install : npm install -g nodemon
// package.json nodemon instead of node

// Chalk-----------------------------------------------------------------------------------------------
const chalk = require("chalk");
console.log(chalk.red("Hello World"));
//Output : Hello World (in red color);
//chalk install : npm install chalk

// ------------------------------------------------------------------------------------------------
//node command and double tab to see preinstalled packages
*/
