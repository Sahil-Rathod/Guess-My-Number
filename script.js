'use strict'

let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber); 

const btn= document.querySelector('.check')

btn.addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value = secretNumber);

    if(!guess){
        displayMessage('⛔No number provided')
    }
    else if(guess === secretNumber){
        displayMessage('Correct answer..🎉');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        }
        else{
            if(score > 0){
            displayMessage(
                guess >secretNumber ? 'U r Too High📈' : 'U r Too Low📉'
            );
            score--;
            document.querySelector('.score').textContent = score;
            }
            else
            {
                displayMessage('U Lost 🤓')
                document.querySelector('.score').textContent = 0;

            }
        }

});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    displayMessage('Start guessing ...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
})