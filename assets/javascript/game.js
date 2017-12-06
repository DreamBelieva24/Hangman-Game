// Defines Variables
var word = ["soccer", "baseball", "football", "tennis"];
var actualWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 12;
var losses = 0;
var wins = 0;


function gameStart() {
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
    // This puts in the blanks for the word.
    }
} // End of function

document.getElementById("secretAnswer").innerHTML = output.join(" ");

guessesLeft = 12;
wrongLetters = [];
output = [];




document.getElementById("game").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;


function checkAnswer(letter) {

    var letterInWord = false;

    for (var j = 0; j < num; j++) {

        if (letter == actualWord[j]) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < num; j++) {
            if (actualWord[j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

};


gameStart();


function rounds() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;
    document.getElementById("secretAnswer").innerHTML = output.join(" ");

    if (letters.toString() == output.toString()) {
        wins++
        document.getElementById("game").innerHTML = wins;
        play();
    } else if (guessesLeft === 0) {
        losses++
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
};

//event listener
document.onkeypress = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};


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