//exporting function from here...

function getGreetings(hours) {
    if((hours < 4) || (hours >= 19)) return "Good Night";
    if(hours < 12) return "Good Morning";
    if(hours < 16) return "Good Afternoon";
    return "Good Evening";
}

//common js module
module.exports = getGreetings;