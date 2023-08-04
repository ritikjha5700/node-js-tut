// *** GLOBALS ***

/*
 __dirname - path to current directory
 __filename - file name along with path
 require - function to use modules (CommonJS)
 module - info about current module (file)
 process - info about env where the program is being executed
 */

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
  console.log("Hello World!");
}, 1000); // priting hello world every second
