'use strict';

let secretNumber=Math.trunc(random()*20)+1;
let score=20;
let highsocre=0;



const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess){
        displayMessage('Bir sayı giriniz.');
    }
    
    else if(guess===secretNumber){
        displayMessage('Doğru Tahmin!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highsocre){
            highsocre=score;

            document.querySelector('.hightscore').textContent=highsocre;
        }

    }

    else if(guess !==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? ':Çok yüksek':'Çok Düşük');
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('oyunu kaybettin');
            document.querySelector('.score').textContent=0;
        }
    }


});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secret = secretNumber=Math.trunc(random()*20)+1;

    displayMessage('Tahmin ediliyor..');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').textContent='';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';


});