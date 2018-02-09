"use strict";

var input = document.getElementById("input");

function nav() {
    input.addEventListener("keypress", function(event) {
        if (event.key === 13) {
            console.log(event);
        }
    });
}

// console.log("input", input);

// var btns = document.getElementById("btn");
// console.log("btns", btns);

// && input.value !== ""

module.exports = nav;
console.log("Welcome, nav.js!");