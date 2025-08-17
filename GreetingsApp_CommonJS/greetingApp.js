/* Here we'll be creating a app, where user will greet based on the time of the day!!! */

const getGreetings = require("./greeter") // file name without extension

const name = process.argv[2];
const hour = new Date().getHours();
// console.log(hour);

const greetings  = getGreetings(hour);

// Good afternoon, Bose
console.log(`${greetings}, ${name}`);