"use strict";

var input = document.getElementById("input");
console.log("input", input);

var btns = document.getElementById("btn");
console.log("btns", btns);


input.addEventListener("keypress", function(event) {
    if (event.key === 13 && input.value !== "") {
        console.log(event);
    }
});

module.exports = nav;
console.log("Welcome, nav.js!");