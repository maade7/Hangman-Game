var game = {
    names: ['James T. Kirk', 'Spock', 'Leonard McCoy', 'Montgomery Scott', 'Uhura', 'Hikaru Sulu', 'Pavel Chekov', 'Christine Chapel', 'Janice Rand', 'Jean-Luc Picard', 'William T. Riker', 'Data', 'Deanna Troi', 'Geordi La Forge', 'Worf', 'Beverly Crusher', 'Wesley Crusher', 'Tasha Yar', 'Benjamin Sisko', 'Kira Nerys', 'Odo', 'Jadzia Dax', 'Ezri Dax', 'Julian Bashir', 'Miles O\'Brien', 'Quark', 'Kathryn Janeway', 'Chakotay', 'Tuvok', 'B\'Elanna Torres', 'Tom Paris', 'Harry Kim', 'The Doctor', 'Neelix', 'Kes', 'Seven of Nine', 'Jonathan Archer', 'T\'Pol', 'Trip Tucker', 'Phlox', 'Hoshi Sato', 'Malcolm Reed', 'Travis Mayweather', 'Porthos'],
    person: [],
    pick: '',
    displayName: document.getElementById("name"),
    displayTries: document.getElementById("tries"),
    displayScore: document.getElementById("score"),
    displayAttempted: document.getElementById("attempted"),
    displayAccess: document.getElementById("access"),
    obj: document.getElementById('characters'),
    tries: 9,
    score: 0,
    attempted: '',
    access: 'ENTER ACCESS CODE',
    denied: new Audio('./assets/audio/002.wav'),
    accepted: new Audio('./assets/audio/commandcodesverified_ep.mp3'),
    command: new Audio('./assets/audio/pleaseinputcommandcodes_ep.mp3'),
    correct: new Audio('./assets/audio/keyok2.mp3'),
    incorect: new Audio('./assets/audio/denybeep1.mp3'),

    reset: function() {
        game.person = [];
        game.pick = game.names[Math.floor(Math.random() * game.names.length)];
        //pick.split('');
        for (var i = 0; i < game.pick.length; i++) {
            if (game.pick[i] == ' ' || game.pick[i] === '.' || game.pick[i] === '\'') {
                game.person[i] = game.pick[i];
            } else {
                game.person.push('•');
            }
            game.tries = 9;
            game.attempted = '';
        }
        console.log(game.pick);
        game.wright();
    },


    move: function(y) {
        game.obj.style.position = 'relative';
        game.obj.style.webkitTransitionDuration = "1s";
        game.obj.style.top = ((y * -50) + 'rem');
    },


    wright: function() {
        if (game.tries === 0) {
            game.score = 0;
            game.displayAccess.style.color = '#c66';
            game.access = 'ACCESS DENIED';
            game.denied.play();
            game.move(game.names.length);
            game.reset();
        }
        if (game.person.indexOf('•') === -1) {
            game.displayAccess.style.color = '#99f';
            game.access = 'ACCESS GRANTED';
            game.accepted.play();
            game.move(game.names.indexOf(game.pick));
            game.reset();
        }
        game.displayName.innerText = game.person.join('');
        game.displayTries.innerHTML = game.tries;
        game.displayScore.innerHTML = game.score;
        game.displayAttempted.innerHTML = game.attempted;
        game.displayAccess.innerHTML = game.access;
    }
}
//user guesses
document.onkeyup = function(event) {
    if (game.pick.toLowerCase().indexOf(event.key.toLowerCase()) === -1 || game.attempted.toLowerCase().indexOf(event.key.toLowerCase()) !== -1) {
        //wrong key
        game.tries = game.tries - 1;
        game.incorect.play();
    } else {
        //right key
        for (var i = 0; i < game.pick.length; i++) {
            if (game.pick[i].toLowerCase() === event.key.toLowerCase()) {
                game.person[i] = game.pick[i];
                game.score++;
                //    correct.play();
            }
        }
    }
    game.attempted = game.attempted + ' ' + (event.key);
    game.wright();
}

document.onkeydown = function(e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
}

game.displayAccess.style.color = '#f90';
console.log(game.names);
game.reset();
game.command.play();
