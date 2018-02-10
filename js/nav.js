"use strict";

var input = document.getElementById("input");

var returnListener = function () {
    input.addEventListener("keyup", function(event) {
        if (event.target.value === 13) {
            console.log(event);
        }
    });
};

// console.log("input", input);

// var btns = document.getElementById("btn");
// console.log("btns", btns);

module.exports = returnListener;
console.log("Welcome, nav.js!");