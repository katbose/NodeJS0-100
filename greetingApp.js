/* Here we'll be creating a app, where user will greet based on the time of the day!!! */

const name = process.argv[2];
const hour = new Date().getHours();
// console.log(hour);


function getgreetings(hours) {
    if((hours < 4) || (hours >= 19)) return "Good Night";
    if(hours < 12) return "Good Morning";
    if(hours < 16) return "Good Afternoon";
    return "Good Evening";
}
const greetings  = getgreetings(hour);

// Good afternoon, Bose
console.log(`${greetings}, ${name}`);

