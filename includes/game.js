var netflixWords = ["Stranger Things", "House of Cards", "Money Heist", "Black Mirror", "Big Mouth",]
var easyChoose = netflixWords[Math.floor(Math.random() * netflixWords.length)].toLowerCase();
var easySplit = easyChoose.split("");
var wordSize = easyChoose.length;
var display = [wordSize];
var outputLetter = "";
var userGuess;

function start() {
    for (var a = 0; a < easyChoose.length; a++) {
        display[a] = "_ ";
        outputLetter = outputLetter + display[a];
    }
    $("#netflix").html(outputLetter);
}

function key() {
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        
        for (var c = 0; c < easyChoose.length; c++) {
            if (userGuess === easyChoose[c]) {
                console.log("You got it right")

            } else if (userGuess !== easyChoose[c]) {
                console.log("wrong")
            }
        }
    }
}

start();
key();