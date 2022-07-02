const os = require("os");

// info about in current user
const user = os.version();

console.log(user);

// methods returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
