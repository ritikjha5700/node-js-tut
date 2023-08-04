// In here after assigning one task to one user it won't wait for it to finish, it will continue providing task to some new user.
// Alternatives are: Promises and Async-await

const { log } = require("console");
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./contents/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./contents/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./contents/result-async.txt",
      `Here is the new result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this work");
      }
    );
  });
});
console.log("starting new task!");
