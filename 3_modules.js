// CommonJS, every file is module (by default)
// Modules - Encapsulated Code(only share minimum)

const names = require("./firstModule");
const sayHi = require("./firstUtility");

const data = require("./secondModule");
// console.log(data);
// console.log(names);

require("./7-mind-granade");

// const { john, peter } = names;

// sayHi("Susan");
// sayHi(john);
// sayHi(peter);
