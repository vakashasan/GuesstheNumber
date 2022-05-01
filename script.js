'use strict';

let score = 20;
let highscore = 0;



let number = Math.trunc(Math.random()*20 + 1);

document.querySelector('.number').textContent = '?';

function displaymessage(message) {
    document.querySelector('.message').textContent = message;
} 

document.querySelector('.check').addEventListener('click' , function() {
    
    const guessNumber = Number(document.querySelector('.guess').value);
    
    if(!guessNumber) {
        displaymessage('no number')
    } 
    
    else if (number === guessNumber){
        displaymessage('You Win')
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }}
    
    else if (guessNumber !== number) {
        console.log('its working')
        if (score > 1) {
            displaymessage(guessNumber > number ? 'too high' : 'too low') ;
            score--;
            document.querySelector('.score').textContent = score;
        } 
        else {
            displaymessage('You Lost the game')
        }

    }
    
     
    

})

document.querySelector('.again').addEventListener('click' , function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start Guessing';
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        number = Math.trunc(Math.random()*20 + 1);
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ''
})



