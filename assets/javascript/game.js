// ==================================================================================================
// INITIALIZE GLOBAL VARIABLES
// ==================================================================================================
  
var randomNumber = 0;
var crystalArray = [];
var wins = 0;
var losses = 0;
var score = 0;
var gameOver = false;
var gameWon = false;
  
 
// ==================================================================================================
// START GAME FUNCTION
// ==================================================================================================
  
startGame = function () {

  // Generate random number for player and print on gameboard
  randomNumber = Math.floor(Math.random() * 121) + 19;
  
  // Print random number on gameboard
  $(".randomNumber").text(randomNumber);
      
  // Generate random number for each crystal
  for( var i=0; i < 4; i++) {
    crystalArray[i] = Math.floor(Math.random() * 13) + 1;
  }
  
  console.log("randomNumber: " + randomNumber);
  console.log("crystalArray: " + crystalArray);
}


// ==================================================================================================
// PLAY GAME FUNCTION
// ==================================================================================================

playGame = function() {

  // Get the player's pick
  if (gameOver !== true) {
    var pickId = event.target.id;

    switch (pickId){
      case "c0":
        yourPick = crystalArray[0];
        break;
      case "c1":
        yourPick = crystalArray[1];
        break;
      case "c2":
        yourPick = crystalArray[2];
        break;
      case "c3":
        yourPick = crystalArray[3];
        break;                              
    }

    console.log("yourPick: " + yourPick);

    score = score + yourPick;
    $("#score").text(score);
    console.log("score: " + score);

    // If your pick matched the computer's pick, you win
  if (score === randomNumber) {
    $("#score").text("You Win!");
    wins++;
    $("#wins").text(wins);
    gameWon = true;
    gameOver = true;
  }
  
  // If your pick > the computer's pick, you lose
  else if (score > randomNumber) {
    $("#score").text("You Lose.");
    losses++;
    $("#losses").text(losses);
    gameOver = true;
  }
 }
}
  

// ==================================================================================================
// GAME WON AUDIO FUNCTION
// ==================================================================================================
gameWonAudio = function(){

  var marilynSing = document.getElementById("myAudio");
  marilynSing.play(); 

  }



// ==================================================================================================
// GAME OVER FUNCTION
// ==================================================================================================
resetScore = function() {

  // Reset score
    score = 0;
    gameOver = false;
    gameWon = false;

    $(".marilyn").animate({
      height: "100px"
    });
  
  // call the Start Game function
  startGame();  
  }


// ==================================================================================================
// MAIN PROCESS
// ==================================================================================================

// Call the Start Game function
startGame();


// Create the on click event that gets the user's pick
$(".crystals").on("click", function() {


  // Call the Play Game function  
playGame();

// Call the Game Won function
if(gameWon){
  gameWonAudio();
}



// Call the Reset Score function  
if(gameOver === true){
resetScore();
}


})
