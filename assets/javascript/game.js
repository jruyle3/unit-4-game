//pseudo code
//variables
$(document).ready(function() {
	var magicNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;
//random numbers and crystal images
	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 120) + 19;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
	}
//start game over and new random number
	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#magicNumber").text(magicNumber);
		$("#total-score").text(totalScore);
		$("#amethyst").attr("data-crystalvalue", crystal1Num);
		$("#emerald").attr("data-crystalvalue", crystal2Num);
		$("#ruby").attr("data-crystalvalue", crystal3Num);
		$("#sapphire").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
	}
//win function
	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}
//loss function
	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();
//create a hover effect on images
	$(".crystal-images").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

// crystal functions
	$(".crystal-images").on("click", function() {
		if (totalScore >= magicNumber) {
			return;
        }
        
		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#total-score").text(totalScore);

		if (totalScore === magicNumber) {
			youWin();
		} else if (totalScore > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});








/*var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var crystals = ["#amethyst", "#emerald", "#ruby", "#sapphire"]

// function startGame() {
// //get random number
// randomNumber = getRandomNumber(19, 120);
// userScore= 0;

// //loop through crystals array...
//     //get a crystal button
//     //add crystal button to DOM w/jquery (how to make HTML element w/jquery)
// function resetCrystals() {

// }


function randomTargetNumber () {
	targetNumber = Math.floor(Math.random() * 101) + 19;
}

function resetCrystals () {
	for (var i = 0; i < images.length; i++) {
		var crystal = $("<img>");
		crystal.attr("src", images[i]);
		crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
		crystal.attr("height", "100");
		$(".crystal-images").append(crystal);
	}
}

function resetHTML () {
	$(".target-number").html(targetNumber);
	$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
	$(".score-number").html(counter);
	$(".crystal-images").empty();
}

function totalReset () {
	randomTargetNumber ();
	counter = 0;
	resetHTML ();
	resetCrystals ();
}



// //show wins/losses/random score/user score/crystals
// }
// function getRandomNumber(min, max) {
//     // TODO: do google search for js get random interger range
// }
// function getCrystalButton(crystalURL) {
//     // use jquery to make a clickable image
//     // give this image a data-value by calling getRandomNumber(1, 12)
    
// }
// $(".crystal-images").on("click", ".crystal", function() {
// // it will add a specific amount of points to the player's total score. 
// // The player wins if their total score matches the random number from the beginning of the game.
// // The player loses if their score goes above the random number. (if/else statement inside the click event)
// // The game restarts whenever the player wins or loses.
// }) 


	// Institute Variables



// Functions



// Running Code

	// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};
		
	//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
	$(document).on("click", ".crystal", crystalClick);*/