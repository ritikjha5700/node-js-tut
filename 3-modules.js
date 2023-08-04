// commonjs, every file is a module by default
// modules- Encapsulated code (only share minimum)

const names = require(`./4-names`);
const sayHi = require(`./5-utils`);
const data = require(`./6-alternative-Flavour`);
require(`./7-mind-granade`);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(data);
console.log(data.items);
console.log(data.items.at(0));
console.log(data.items.at(1));
console.log(data.singlePerson);
console.log(data.singlePerson.name);
