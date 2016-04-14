var allQuestions = [{
	question: "What team plays in Charlotte?",
	choice: ['Pelicans', 'Bobcats', 'Hornets', "Bullets"],
	answer: 'Hornets'
},{
	question: "What team plays in Dallas?",
	choice: ['Pelicans', 'Bobcats', 'Hornets', "Bullets"],
	answer: 'Hornets'
},{
	question: "What team plays in New York?",
	choice: ['Pelicans', 'Bobcats', 'Hornets', "Bullets"],
	answer: 'Hornets'
},{
	question: "What team plays in Miami?",
	choice: ['Pelicans', 'Bobcats', 'Hornets', "Bullets"],
	answer: 'Hornets'
}];

$(function(){
	
	newGame();

	var answer;
	var guess;
	var score;

	$('#newGame').on("click", function() {
		newGame();
	}

	function newGame() {
		//print first question to console
		//print first question to HTML
	}

	$('#nextQuestion').click(){
		next nextQuestion();
	}

	function nextQuestion () {

	}

	$('.allChoices').on("click", '.choice', function(){
		var guess = $(this);
		console.log(guess.text());
	});

})


/*

cars[0].year[0]
// cars[0].color

for (var i = 0; i < cars.lenght; i++) {
	console.log(cars[i].color)
}

*/


// // Goals: Gives some way for the user to answer

// // 1. Register the click on a choice
// // 2. Save that choice somewhere

// // Requirements

// // - Gives some way for the user to answer
// // - Compares the user answer and the correct answer to determine a score
// // - Requires the user to answer a number ( at least 5) of questions, one at a time
// // - Prevents the user from skipping questions
// // - Display the user score, when all the questions are answered,

// - Allow the user to start a new game.

// - Hint:
//     - you may want to store the question objects in an array
//     - Use JavaScript objects to represent the questions.

