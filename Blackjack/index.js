
let cards = []; //javascript array
let hasBlackJack = false; //to check if the player won any blackjack
let isAlive = false; //to check if the player is alive

//declare a variable called message and assign its value to an empty string
let message = "";

//reassign the message variable to the string we're logging out 

let sum = 0;

console.log(sum);

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector("#sum-el"); // the querySelector actually selects the elements based on the css selectors used
console.log(sumEl);

let cardsEl = document.querySelector("#cards-el");
console.log(cardsEl);

//create a function, getRandomCard(), that always returns random number between 1 and 13
function getRandomCard(){
    //if 1 -> return 11
    //if 11-13 -> return 10
    let randomNumber = Math.floor(Math.random()*(13-1+1))+1;
    if (randomNumber>10){
        return 10;
    }
    else if(randomNumber===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function renderGame(){
    cardsEl.textContent="Cards: ";

    //create a for loop that renders out all the cards instead of just two
    for(let i = 0; i<cards.length;i++){
        cardsEl.textContent+= cards[i]+" ";
    }

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
    isAlive = true;
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function newCard(){
    //only allow the players to select a new card when isAlive is true and hasBlackjack is false
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing new card from the deck!");
        //create a card variable and hard code it its value to a number between 2-11
        let card = getRandomCard();

        //pushing the new card into the cards array
        cards.push(card);
        console.log(cards);
        
        //add the card to the sum variable 
        sum+=card;
        //call start game
        renderGame();
    }
}

