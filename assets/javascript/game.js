var names = ['James T. Kirk', 'Spock', 'Leonard McCoy', 'Montgomery Scott', 'Uhura', 'Hikaru Sulu', 'Pavel Chekov', 'Christine Chapel', 'Janice Rand', 'Jean-Luc Picard', 'William T. Riker', 'Deanna Troi', 'Data', 'Geordi La Forge', 'Worf', 'Beverly Crusher', 'Wesley Crusher', 'Tasha Yar', 'Benjamin Sisko', 'Kira Nerys', 'Odo', 'Jadzia Dax', 'Ezri Dax', 'Julian Bashir', 'Miles O\'Brien', 'Quark', 'Kathryn Janeway', 'Chakotay', 'Tuvok', 'B\'Elanna Torres', 'Tom Paris', 'Harry Kim', 'The Doctor', 'Neelix', 'Kes', 'Seven of Nine', 'Jonathan Archer', 'T\'Pol', 'Trip Tucker', 'Phlox', 'Hoshi Sato', 'Malcolm Reed', 'Travis Mayweather', 'Porthos'];
var person = [];
var pick = '';
var displayName = document.getElementById("name");
var displayTries = document.getElementById("tries");
var displayScore = document.getElementById("score");
var displayAttempted = document.getElementById("attempted");
var displayAccess = document.getElementById("access");
var obj = document.getElementById('characters');
var tries = 10;
var score = 0;
var attempted = '';
var access = 'ACCESS DENIED';



function reset() {
    person = [];
    pick = names[Math.floor(Math.random() * names.length)];
    //pick.split('');
    for (var i = 0; i < pick.length; i++) {
        if (pick[i] == ' ' || pick[i] === '.' || pick[i] === '\'') {
            person[i] = pick[i];
        } else {
            person.push('*');
        }
        tries = 10;
        attempted = '';
    }
    console.log(pick);
    wright();
}

//user guesses
document.onkeyup = function(event) {
    if (pick.toLowerCase().indexOf(event.key.toLowerCase()) === -1 || attempted.toLowerCase().indexOf(event.key.toLowerCase()) !== -1) {
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
    wright();
}

function move(y) {
    obj.style.position = 'relative';
    obj.style.top = ((y * -50) + 'rem');
    console.log((y * -50) + 'rem');
}


function wright() {
    if (tries === 0) {
        alert('Attempts Exhausted: Access Denied' + String.fromCharCode(10) + 'Score:  ' + score);
        score = 0;
        access = 'ACCESS DENIED';
        reset();
    }
    if (person.indexOf('*') === -1) {
        access = 'ACCESS GRANTED';
        move(names.indexOf(pick));
        reset();
    }
    displayName.innerText = person.join('');
    displayTries.innerHTML = tries;
    displayScore.innerHTML = score;
    displayAttempted.innerHTML = attempted;
    displayAccess.innerHTML = access;
}

console.log(names);
reset();
