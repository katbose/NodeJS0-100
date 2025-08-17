//exporting function from here...

export function getGreetings(hours) {
    if((hours < 4) || (hours >= 19)) return "Good Night";
    if(hours < 12) return "Good Morning";
    if(hours < 16) return "Good Afternoon";
    return "Good Evening";
}

//ESM module
// export default getGreetings;