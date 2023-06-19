
let cards=[];
let message = document.getElementById('message');
let cardsEl = document.getElementById('cards');
let sumEl = document.getElementById('sum');
let isAlive = false;
let hasBlackJack = false;
let sum = 0;

function start(){
    isAlive = true;
    hasBlackJack = false;
    if(sum === 0){
        document.getElementById('start-game').textContent = "RESTART GAME";
    }
    sum = 0;
    cards = [];
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    let c1,c2;
    c1 = randomCard();
    c2 = randomCard();
    sum = c1 + c2;
    cards.push(c1);
    cards.push(c2);
    renderGame();
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let c = randomCard();
        sum += c;
        cards.push(c);
        renderGame();
    }
}

function randomCard(){
    let card = Math.floor(Math.random()*13) + 1;
    if(card === 1){
        return 11;
    }
    if(card >= 10){
        return 10;
    }
    return card;
}

function renderGame(){
    cardsEl.textContent = "Cards:";
    for(let i = 0;i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: "+sum;
    gameCheck();
}

function gameCheck(){
    if(sum < 21){
        message.textContent = "Do you want to draw another card?";
    }
    if(sum === 21){
        message.textContent = "YOU WON!!!";
        cards = [];
        sum = 0;
        document.getElementById('start-game').textContent = "PLAY AGAIN";
        hasBlackJack = true;
    }
    if(sum > 21){
        cards = [];
        sum = 0;
        document.getElementById('start-game').textContent = "PLAY AGAIN";
        isAlive = false;
        message.textContent = "You Lose";
    }
}