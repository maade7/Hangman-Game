var names = ['James T. Kirk', 'Spock', 'Leonard McCoy', 'Pavel Chekov', 'Montgomery Scott', 'Nyota Uhura', 'Hikaru Sulu', 'Jean-Luc Picard', 'William T. Riker', 'Data', 'Geordi La Forge', 'Worf', 'Deanna Troi', 'Natasha Yar', 'Odo', 'Benjamin Sisko', 'Julian Bashir', 'Jadzia Dax', 'Kira Nerys', 'Kathryn Janeway', 'Chakotay', 'Tuvok', 'Seven of Nine', 'Miles O\'Brien']
var person = [];
var pick = '';
var displayName = document.getElementById("name");
var displayTries = document.getElementById("tries");
var displayScore = document.getElementById("score");
var displayAttempted = document.getElementById("attempted");
var displayBio = document.getElementById("bio");
var tries = 10;
var score = 0;
var attempted = '';



function reset() {
    person = [];
    pick = names[Math.floor(Math.random() * names.length - 1)];
    //pick.split("");
    for (var i = 0; i < pick.length; i++) {
        person.push(' _');
        tries = 10;
        attempted = '';
    }
    console.log(pick);
    wright()
}

//user guesses
document.onkeyup = function(event) {
    if (pick.toLowerCase().indexOf(event.key.toLowerCase()) === -1 || attempted.toLowerCase().indexOf(event.key.toLowerCase()) !== -1 && event.key !== ' ') {
        console.log(pick.indexOf(event.key));
        //wrong key
        tries = tries - 1;
    } else {
        //right key
        for (var i = 0; i < pick.length; i++) {
            if (pick[i].toLowerCase() === event.key.toLowerCase()) {
                person[i] = pick[i];
                score++;
            }
        }
    }
    attempted = attempted + ' ' + (event.key);
    wright()
}

function personBio(bio) {
    displayBio.innerHTML = bio;
}

function wright() {
    if (tries == 0) {
        alert('Attempts Exhausted: Access Denied' + String.fromCharCode(10) + 'Score:  ' + score);
        reset();
    }
    if (person.indexOf(' _') === -1) {
        alert('Access Granted' + String.fromCharCode(10) + 'Score:  ' + score);
        personBio(pick)
        reset();
    }
    displayName.innerText = person.join('');
    displayTries.innerHTML = tries;
    displayScore.innerHTML = score;
    displayAttempted.innerHTML = attempted;
}

console.log(names);
reset();
