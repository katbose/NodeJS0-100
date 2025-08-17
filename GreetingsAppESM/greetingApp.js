/* Here we'll be creating a app, where user will greet based on the time of the day!!! */

import {getGreetings} from "./greeter.js" // In ESM, we need to mention .js extension also!!!

const name = process.argv[2];
const hour = new Date().getHours();
// console.log(hour);

const greetings  = getGreetings(hour);

// Good afternoon, Bose
console.log(`${greetings}, ${name}`);