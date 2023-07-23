let randomNumber= Math.random();  //this method creates/returns a random decimal number between 0 and 1(exclusive)
console.log(randomNumber);

//random number between 0 and 6(exclusive) will be..
randomNumber = Math.random()*6;
console.log(randomNumber);

//rounding up the number based on floor of the number
randomNumber=Math.floor(Math.random()*7);
console.log(randomNumber);

//creating random number in between a certain range where the upper limit is exclusive
let min = 4;
let max = 15; //exclusive, it will be till 14

randomNumber = Math.floor(Math.random()*(max-min)+min);
console.log(randomNumber);

//creating random numbers in between a certain range where the upper limit will be inclusive
min = 10;
max = 20; //inclusive it will be till 20

randomNumber = Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNumber);

//create a function, rollDice(), that returns a random number between 1 and 6
function rollDice(){
    randomNumber = Math.floor(Math.random()*(6-1+1))+1;
    return randomNumber;
}

let roll = rollDice();
console.log(roll);