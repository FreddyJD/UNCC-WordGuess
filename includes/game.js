// Freddy's psudo code.
// 1.) Register all the vars 
//          - Keys pressed 
//          - User score 
//          - Max attampts (This will be depending on the word the leght of the word they get)
// 2.) Arr with words deconstructed. or Arr and then separte arrs by letter 
// 3.) Randomize word choose every reload or guess
// 4. ) Register each key they press 
// 5. ) Max amount of guesses 
// 6. ) If statment ----- If they dont max out of keystrokes and guess ==== they win! score count increment by 1 
// 6.1 ) If else statmenet --- if they max out and dont guess ==== They loose and score sets to 0 again.
// 7 ) Create a loop to see if the word is correct ? 
// wifi80

var userPress;
var userMax;
var userScore;
var netflixWords;
var randomChoise;
var gameStart;

var netflixWords = {
    strangerThings: "Stranger Things", 
    houseOfCards: "House of Cards",
    orangeIsTheNewBlack: "Orange is the new black",
    moneyHeist: "Money Heist",
    blackMirror: "Black Mirror",
    bigMouth: "Big Mouth",
}

$("#userScore").html(userScore);


// My new needed variables 
// var attemptsLeft_tag = document.getElementById("attemptsLeft_tag");
// var usedWords_tag = document.getElementById("usedWords_tag");
// var netflixShowTag = document.getElementById("netflixShowTag");


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    console.log(event.key); 

} 

function game() { 
    document.getElementById('netflixShowTag').innerHTML =  netflixWords.strangerThings.split("");
    document.getElementById('netflixShowTag').innerHTML =  netflixWords.i.split("");
    
}

game();




// document.onkeyup = function(event) {

// }



//console.log("This is a letter!!!" + newVar);


// var randomChoise = Math.floor(Math.random()*5);
