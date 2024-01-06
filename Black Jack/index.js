let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let message = document.getElementById("message");
let earlierSum = 0;
let round = 1;

function startGame(){
    let firstCard = Math.floor((Math.random()*11)+2);
    let secondCard = Math.floor((Math.random()*11)+2);
    let sumCard = firstCard+secondCard;

    if (earlierSum < 21){
        cards.textContent = "Cards: "
        sum.textContent = "Sum: "
        earlierSum += sumCard;
        round += 1;
        message.textContent = "Time for Round " + round;
        cards.textContent += firstCard + " " + secondCard;
        sum.textContent += earlierSum;
    }

    if (earlierSum == 21){
        message.textContent = "You have won the blackjack."
    }

    if (earlierSum > 21){
        message.textContent = "You have lost the blackjack."
    }
}

function newGame(){
    cards.textContent = "Cards: "
    sum.textContent = "Sum: "
    message.textContent = ""
    earlierSum = 0;
    round = 1;
}