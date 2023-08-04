// In here after one task to one user it will wait to finish it then only it will further proceed.

const { readFileSync, writeFileSync } = require("fs"); // destructuring from fs module

console.log("start");
const first = readFileSync("./contents/first.txt", "utf-8");
const second = readFileSync("./contents/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "./contents/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the work");
console.log("starting the next one");
