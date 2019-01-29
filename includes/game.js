const words = [
    "bojack",
    "roma",
    "lovesick",
    "cuckoo"
];

let len = words.length;
let choosed = words[Math.floor(Math.random() * len)].toLocaleLowerCase();
var dword = choosed.split("");
var hideWord = [];
var maxWords = 26;
var score = 0;
let tempA;
let tempB;


function start() {
    for (let i = 0; i < dword.length; i++) {
        if (dword[i] === " ") {
            hideWord.push(" ");
        } else {
            hideWord.push(" _ ")[i];
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
    for (let i = 0; i < dword.length; i++) {
        if (dword[i] === temp) {
            hideWord[i] = temp
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
    maxWords = 26;
    start();
}