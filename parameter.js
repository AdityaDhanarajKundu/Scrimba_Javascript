const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
    welcomeEl.textContent = `Welcome Back, ${name}`; 
}

greetUser("Aditya Kundu");

//create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr){
    return arr[0];
}

let myArr=[1,2,3,4];

//Call it with an array as an argument to verify that it works
let element = getFirst(myArr);
console.log(element);
