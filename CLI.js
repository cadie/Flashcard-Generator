var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCard1 = new BasicCard("What does HTML stand for?", "Hyper Text Markup Language");
var basicCard2 = new BasicCard("What does CSS stand for?", "Cascading Style Sheet");
var basicCard3 = new BasicCard("Inside which HTML element do we put JavaScript code?", "<javascript>");

var clozeCard1 = new ClozeCard("jQuery is a Javascript Library", "Javascript");
var clozeCard2 = new ClozeCard("An object method is an object property containing a function", "function");
var clozeCard3 = new ClozeCard("A boolean data type represents one of two values: true or false", "boolean");
