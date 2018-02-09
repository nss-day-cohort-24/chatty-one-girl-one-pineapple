"use strict";

let nav = require("./nav");
let options = require("./options");
let messages = require("./messages");

let chatty = {
    nav,
    options,
    messages
};

module.exports = chatty;
console.log("Welcome, chatty.js!");