let fruit = ["🍎","🍊","🍎","🍎","🍊"];

let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");

/*
Create a function that puts the apples into the appleShelf and the oranges 
into the orangeshelf. Use a for loop, a conditional statement and the textContent property.
 */

function sortFruit(){
    for(let i =0; i<fruit.length; i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent= appleShelf.textContent+"🍎";
        }
        else if(fruit[i]==="🍊"){
            orangeShelf.textContent += "🍊";
        }
    }
}

sortFruit();