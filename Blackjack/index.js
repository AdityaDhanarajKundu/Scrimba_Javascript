// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 7;
let secondCard = 10;
let hasBlackJack = false; //to check if the player won any blackjack
let isAlive = true; //to check if the player is alive

//declare a variable called message and assign its value to an empty string
let message = "";

//reassign the message variable to the string we're logging out 

let sum = firstCard+secondCard;

console.log(sum);

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector("#sum-el"); // the querySelector actually selects the elements based on the css selectors used
console.log(sumEl);

let cardsEl = document.querySelector("#cards-el");
console.log(cardsEl);

function renderGame(){
    cardsEl.textContent="Cards: "+firstCard+" "+secondCard;

    if(sum<21){
        message="Do you want to draw a next card? 🙂";
    }
    else if(sum==21){
        message="Woohoo!! You Have Got Blackjack! 🥳";
        hasBlackJack=true;
    }
    else if(sum>21){
        message="You are out of the game! 😭";
        isAlive=false;
    }

    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
}

function startGame(){
    renderGame();
}

function newCard(){
    console.log("Drawing new card from the deck!");
    //create a card variable and hard code it its value to a number between 2-11
    let card = 8;
    //add the card to the sum variable 
    sum+=card;
    //call start game
    renderGame();
}

