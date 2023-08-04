// Built-in modules
// OS
// PATH
// FS
// HTTP

const os = require("os");
const user = os.userInfo();

// info about current user
console.log(user);

// method returns systems uptime in seconds
console.log(`The systems uptime is: ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
