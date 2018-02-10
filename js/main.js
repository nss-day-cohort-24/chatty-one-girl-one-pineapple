"use strict";
// main is where you require all the js files from module exports

// let chatApp = require("./chatty");

console.log("Welcome, main.js!");
// console.log("chatApp", chatApp);

// import the functions from the other js files 

// main.js
// import {hello} from "module"; 
// let val = hello();
// chatApp.returnListener();

var input = document.getElementById("input");
var returnListener = function () {
    input.addEventListener("keyup", function(event) {
        var key = event.keyCode;
        var userInput = event.target.value;
        if (key === 13 && input.value !== "") {
            // `<li>${userInput}</li>`;
        } 
    });
};
returnListener();