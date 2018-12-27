const words = [
    "Bo Jack Horse man ",
    "Stranger Things",
    "House of Cards"];
let len = words.length;
let choosed = words[Math.floor(Math.random() * len)].toLocaleLowerCase();
var dword = choosed.split("");
var hideWord = [];
var maxWords = 15;
var score = 0;
let tempA;
let tempB;

function start() {
    console.log(dword);
    for (let l = 0; l < dword.length; l++) {
        if (dword[l] === " ") {
            hideWord.push(" ");
        } else {
            hideWord.push("_ ")[l];
            $('#netflix').html(hideWord);
        }
    }
}
start();

document.addEventListener('keyup', (event) => {
    let temp = event.key.toLocaleLowerCase();
    tempA = dword.toString();
    tempB = hideWord.toString();
    maxWords--;
    $('#maxWords').html(maxWords);
    for (let l = 0; l < dword.length; l++) {
        if (dword[l] === temp) {
            hideWord[l] = temp
            $('#netflix').html(hideWord);
        }
    }
    if (tempA === tempB) {
        score++;
        $('#score').html(score);
        restart();
    } else if (maxWords === 0) {
        score--; 
        $('#score').html(score);
        restart();
    }
});
function restart() { 
    choosed = words[Math.floor(Math.random() * len)];
    dword = choosed.split("");
    hideWord = [];
    tempA = dword.toString();
    tempB = hideWord.toString();
    maxWords = 15;
    start();
}