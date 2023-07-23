let featuredPosts = [
    "Netflix Clone",
    "Code for my project",
    "Relaunched my portfolio"
];

let items = ["student","undergraduate","datacamp","java developer",
"computer science","kolkata","google","microsoft"];

console.log(featuredPosts[0]); //first element of the featuredPosts array
console.log(items[1]);  //second element of the items array

//create an array with three different primitive data types 
//unlike java and like python the arrays support elements of different data types

let per = ["Aditya Dhanaraj Kundu",21,true]; //string,number and boolean
console.log(per);
console.log(typeof(per));
console.log(typeof(items));

//adding and removing data elements from the arrays
let cards = [7,4];

//using push method to add like stack in java
cards.push(6);
console.log(cards);

//Push the messages to the messages array and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about  you?",
    "All good. Been working on my portfolio lately."
];

let newMessage = "Same Here!";

messages.push(newMessage);

console.log(messages);

let popMessage = messages.pop(); //just like the stacks in java the pop method pops out the last inserted element from the stack

//the pop methods also returns the popped element after popping
console.log(popMessage);

console.log(messages);

//removing elements from the array using the splice method
items.splice(3,2);  //here the first argument is the index number and the second argument is the no of elements to be deleted starting from that index

messages.push("Great to hear!");
messages.push("See you soon!");

items.push("meta");
items.push("tiktok");

console.log(messages.length);
console.log(items.length);

//use loop to log out each array element according to their indexes
for(let i = 0; i<5;i++){
    console.log(messages[i]);
}

for(let i = 0; i<8;i++){
    console.log(items[i]);
}

//the same code can be implemented by directly writing the code in the for loop
for(let i = 0; i<messages.length;i++){
    console.log(messages[i]);
}

for(let i = 0; i<items.length;i++){
    console.log(items[i]);
}


let largestCountries = ["China","India","USA","Indonesia","Pakistan"];
console.log("The 5 largest countries in the world:");
for(let i=0; i<largestCountries.length;i++){
    console.log("-"+largestCountries[i]);
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

console.log(largeCountries);
//fix the largeCountries so that China and Pakistan are added back into their respective places
//use push(),pop() and their counterparts unshift() and shift() methods

//using the shift and the unshift methods to remove and insert at the begining of the array
largeCountries.shift();
largeCountries.unshift("China");

largeCountries.pop();
largeCountries.push("Pakistan");

console.log(largeCountries);