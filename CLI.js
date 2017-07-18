var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var basicCards = require("./basicQuestions.js");
var clozeCards = require("./clozeQuestions.js");

console.log(clozeQuestionsArray);

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

// function that starts the app
function app() {
  inquirer.prompt(initialPrompt).then(function(answers) {
    if (answers.initialpromptChoice === 'Basic Flashcards') {
      // console.log('Basic was chosen');
      basicCardQuestions();
    } else {
      clozeCardQuestions();
    }
  });
}

function basicCardQuestions() {
  //this function asks the basic card questions. question prompt has to be inside of here because the currentQuestion # does not update if it's not
  inquirer.prompt([{
      message: basicCards[currentQuestion].front + '\nAnswer: ',
      name: 'userGuess',
      type: 'input'
  }]).then(function(answers) {

    // check if the users guess is correct
		if (answers.userGuess.toLowerCase() === basicCards[currentQuestion].back.toLowerCase()) {
			console.log('Correct!');
		} else {
			console.log('Incorrect!');
      console.log("Correct answer: " + basicCards[currentQuestion].back + "\n");
		}

		// Advance to the next question
		if (currentQuestion < basicCards.length - 1) {
			currentQuestion++;
			basicCardQuestions();
		} else {
			console.log('You\'ve answered all of the questions!');

			// Prompt the user to play again
			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					// Reset the game
					currentQuestion = 0;

					// Begin asking the questions!
					app();
				} else {
					// Exit the game
					console.log('Bye!');
				}
			})
		}

  })
}

// array that holds the cloze card questions
var clozeQuestionsArray = [];

// create the clozecards with the missing text and push it into the array
for (var i = 0; i < clozeCards.length; i++) {
	var q = new ClozeCard(clozeCards[i].fullText, clozeCards[i].cloze);
	clozeQuestionsArray.push(q);
}

function clozeCardQuestions() {
  //this function asks the cloze card questions. question prompt has to be inside of here because the currentQuestion # does not update if it's not
  inquirer.prompt([{
      message: clozeQuestionsArray[currentQuestion].partial + '\nAnswer: ',
      name: 'userGuess',
      type: 'input'
  }]).then(function(answers) {

    // check if the users guess is correct
		if (answers.userGuess.toLowerCase() === clozeQuestionsArray[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
		} else {
			console.log('Incorrect!');
      console.log("Correct answer: " + clozeQuestionsArray[currentQuestion].fullText + "\n");
		}

		// Advance to the next question
		if (currentQuestion < basicCards.length - 1) {
			currentQuestion++;
			clozeCardQuestions();
		} else {
			console.log('You\'ve answered all of the questions!');

			// Prompt the user to play again
			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					// Reset the game
					currentQuestion = 0;

					// Begin asking the questions!
					app();
				} else {
					// Exit the game
					console.log('Bye!');
				}
			})
		}

  })
}

// Begin asking the questions!
app();
