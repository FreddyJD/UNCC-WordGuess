var words = ["test", "random"];
var ranNum = Math.floor(Math.random() * words.length);
var displayWord = words[ranNum];
var wSplit = (displayWord).split('');
currentWord = [];

function main() {
    document.onkeyup = function (event) {
        var userGuess = [];
        var letter = event.key.toLowerCase();
        for (var i = 0; i < displayWord.length; i++) {

            if (wSplit[i] === " ") {
            userGuess.push(" ");

            } else if (wSplit[i] === letter) {
            userGuess.push(wSplit[i]);

            } else {
            userGuess.push("_ ")

            }
        }
        document.getElementById("netflix").innerHTML = userGuess.join(" ");  
    } 
};

main();