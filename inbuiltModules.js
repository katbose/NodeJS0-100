// We'll see inbuilt modules present in Node.js

import os from "node:os";
console.log("CPU's :-", os.cpus().length);
console.log("Total Memory :- ", os.totalmem()/((1024)*(1024)*(1024)));
console.log("Free Memory :- ", os.freemem());
console.log("Uptime :- ", os.uptime());
console.log("User Info :- ", os.userInfo());
console.log("HostName :- ", os.hostname());
console.log("Machine :- ", os.machine());