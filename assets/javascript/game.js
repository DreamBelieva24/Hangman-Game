// Defines Variables
var word = ["JEDI", "STORMTROOPER", "EWOK", "YODA", "DARTHVADER", "LUKESKYWALKER", "CHEWBACCA"];
var actualWord = "";
// Picks word.
var letters = [];
// Used to count the letters.
var output = [];
// This goes on the screen.
var wrongLetters = [];
var num = 0;
var guessesLeft = 12;
var losses = 0;




document.getElementById("guessesLeft").innerHTML = guessesLeft;

function gameStart() {
    
    var guessesLeft = 12;
    var wrongLetters = [];
    actualWord = word[Math.floor(Math.random() * word.length)];
    // Picks word from the word array.
    letters = actualWord.split("");
    // Splits the letters in the word by each lete.
    num = letters.length;
    // Set up for later function.

    console.log(actualWord)
    // Answer Key in console.
    
    for (var i = 0; i < num; i++) {
        output.push("__")
    // Puts in blanks. 

    document.getElementById("output").innerHTML = output.join(" "); 
   
    // Puts in blanks at the beginning of the game. 
    }
} // End of function

gameStart();
// Call Game Setup.

// Event listener
document.onkeypress = function (event) {
   
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};

function checkAnswer(letter) {

    var letterInWord = false;

    for (var j = 0; j < num; j++) {

        // Split by letter.

        if (letter == actualWord[j]) {
            letterInWord = true;

            // If the letter is in the word, then change to true.
        }
    }

    if (letterInWord) {
        // TRUE
        for (var j = 0; j < num; j++) {
            if (actualWord[j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        // FALSE
        wrongLetters.push(letter); // Pushes letter to wrong letter section.
        guessesLeft--; // Subtracts from 12 starting guesses.
    }

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;
    document.getElementById("output").innerHTML = output.join(" ");

};


function rounds() {
    
    if (letters.toString() == output.toString()) {
        
        document.getElementById("game").innerHTML = "You Win!";
        document.body.style.background = "url('http://68.media.tumblr.com/f1a48677bbf769b2e0025d6f9f17510f/tumblr_nu7s4k101h1t2e1ono1_500.gif') no-repeat "
        document.body.style.backgroundSize = "100%";
        document.getElementById("footer").innerHTML = '<audio id= "audio" controls autoplay src="assets/images/win.mp3"></audio>';
        document.onkeypress = function (event) {
            location.reload();}
  
    } else if (guessesLeft === 0) {
        document.getElementById("losses").innerHTML = "You Lose!";
        document.body.style.background = "url('https://www.zaccohn.com/images/gifs/darth-vader.gif') no-repeat "
        document.body.style.backgroundSize = "100%";
        document.getElementById("footer").innerHTML = '<audio id= "audio" controls autoplay src="assets/images/lose.mp3"></audio>';
        document.onkeypress = function (event) {
            location.reload();
    }
}
};

var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
  span = document.createElement("span");                    // Create a <span> element
  letter = document.createTextNode(bylineArr[i]);   // Create the letter
  if(bylineArr[i] == ' ') {                                             // If the letter is a space...
    byline.appendChild(letter);                 // ...Add the space without a span
  } else {
        span.appendChild(letter);                       // Add the letter to the span
    byline.appendChild(span);                   // Add the span to the h2
  }
}
