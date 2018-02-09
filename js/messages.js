"use strict";

var output = document.getElementById("output");
console.log("output", output);

var btns = document.getElementById("btn");
console.log("btns", btns);

var prefilledmessages = new XMLHttpRequest();
function dataMessages(event) // this is what it targets
{
    
    // this is what the function does 
    {
        var myObj = JSON.parse();
        document.getElementById("output").innerHTML = myObj.name;
    }
    // make a function, name it, (event), then it creates a variable that parses the JSON
};
prefilledmessages.open("GET", "message.json");
prefilledmessages.send();

// module.js
// export function hello() {
//   return "Hello";

module.exports = messages;
console.log("Welcome, messages.js!");