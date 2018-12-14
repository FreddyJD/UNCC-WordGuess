// Freddy's psudo code.
// 1.) Register all the vars 
//          - Keys pressed 
//          - User score 
//          - Max attampts (This will be depending on the word the leght of the word they get)
// 2.) Arr with words deconstructed.
// 3.) Randomize word choose every reload or guess
// 4. ) Register each key they press 
// 5. ) Max amount of guesses 
// 6. ) If statment ----- If they dont max out of keystrokes and guess ==== they win! score count increment by 1 
// 6.1 ) If else statmenet --- if they max out and dont guess ==== They loose and score sets to 0 again.

var userPress;
var userScore;
var userMax;
var netflixWords;
var randomChoise;

var netflixWords = { 
    strangerThings: "Stranger Things",   
    houseOfCards: "House of Cards",
    orangeIsTheNewBlack: "Orange is the new black",
}

var randomChoise = Math.floor(Math.random()*5);
console.log(randomChoise);