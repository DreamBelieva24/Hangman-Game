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
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia800202.us.archive.org/27/items/14TheBeachBoysTheWarmthOfTheSun/The%20Beach%20Boys%20-%20Good%20Vibrations.mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        document.body.style.background = "url('http://68.media.tumblr.com/f1a48677bbf769b2e0025d6f9f17510f/tumblr_nu7s4k101h1t2e1ono1_500.gif') no-repeat "
        document.body.style.backgroundSize = "100%";
        document.onkeypress = function (event) {
            location.reload();}
  
    } else if (guessesLeft === 0) {
        document.getElementById("losses").innerHTML = "You Lose!";
        document.body.style.background = "url('https://www.zaccohn.com/images/gifs/darth-vader.gif') no-repeat "
        document.body.style.backgroundSize = "100%";
        document.onkeypress = function (event) {
            location.reload();
    }}
    
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



//music works!

function play() {
    if (actualWord == "beachboys") {
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia800202.us.archive.org/27/items/14TheBeachBoysTheWarmthOfTheSun/The%20Beach%20Boys%20-%20Good%20Vibrations.mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/onprinciple-beachboys-surfergirl-500.jpg'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart();
    } else if (actualWord == "jackjohnson") {
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia601008.us.archive.org/31/items/JackJohnsonSittingWaitingWishingToqueMP3/jack%20johnson%20banana%20pancakes%20-%20[Toque%20MP3].mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart();
    } else if (actualWord == "dickdale") {
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801606.us.archive.org/31/items/DickDaleAndTheDeltones-01-50/DickDaleAndTheDel-tones-Misirlou.mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/216931.jpg'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart();
    } else if (actualWord.toString() == "311") {
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia601008.us.archive.org/18/items/311IllBeHereAwhile/311%20-%20I%27ll%20Be%20Here%20Awhile.mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/311thumb2_400x400.jpg'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart();
    } else if (actualWord == "bobmarley") {
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia802605.us.archive.org/9/items/BobMarley_201410/Bob%20Marley%20-%20DISCOGRAFIA/Bob%20Marley-Legend/15%20Jamming.mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/bob-marley-beach-6929.jpg'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart();
    }

};