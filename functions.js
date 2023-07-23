let player1time = 102;
let player2time = 107;

function getFastestTime(){
    if(player1time<player2time)
        return player1time;
    else if(player2time<player1time)
        return player2time;
    else
        return player1time;
}

let fastestRace = getFastestTime();
console.log(fastestRace);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime(){
    return player1time+player2time;
}

let totalTime = totalRaceTime();
console.log(totalTime);

let hands = ["rock","paper","scissors"];
//create a function that returns a random item from the array

//creating a function to get the random array index
function getHand(){
    let randomIndex = Math.floor(Math.random()*3);
    //getting the array items using the randomIndex
    return hands[randomIndex];
}
console.log(getHand());

