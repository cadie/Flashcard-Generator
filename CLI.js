var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var BasicCards = require("./Questions.js");
var ClozeCards = require("./Questions.js");


// Variable that holds the cloze-deleted questions list
// var closeQuestions = [];

// Populate the cloze-deleted questions list
// for (var i = 0; i < questions.length; i++) {
// 	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
// 	closeQuestions.push(q);
// }

// What question the user is currently on
var currentQuestion = 0;

var initialPrompt = {
    type: 'list',
    message: 'What kind of cards do you want to use?',
    choices: [
      'Basic Flashcards',
      'Cloze Flashcards'
    ],
    name: 'initialpromptChoice'
    };


function app() {
  inquirer.prompt(initialPrompt).then(function(answers) {
    if (answers.initialpromptChoice === 'Basic Flashcards') {
      console.log('Basic was chosen');
      basicCardQuestions();
    } else {
      console.log('Cloze was chosen');
    }
  });
}

function basicCardQuestions() {
  //this function asks the cloze card questions
}

// Begin asking the questions!
app();
