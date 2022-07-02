// COmmonJS, every file is module (by default)
// Modules - Encapsulated Code ( only share minimum)

// 1) The console is the terminal window
console.log("Hello");
// 2) Global object instead of window object
// console.log(global);
//  3) Has common Core modules that we will explore
//  4) CommonJS modules instead of ES6 modules

// const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
// const { add, subtract, multiply, divide } = require("./math");
// console.log(add(1, 3));

// setInterval(() => {
//   console.log(`hello world`);
// }, 1000);
const name = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavours");
require("./7-mind-grenade");
// console.log(name);
console.log(data);

sayHi("susan");
sayHi(name.john);
sayHi(name.peter);
