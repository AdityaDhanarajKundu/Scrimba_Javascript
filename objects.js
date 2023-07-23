//objects - store data in depth composite/complex data type
//key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harold Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}

//box notation
console.log(course["creator"]);

//with dot notation 
console.log(course.tags[1]);


/*
    Create an object that represents an airbnb castle listing.
    It should contain at least one boolean, one string, one number, and one array
    Log out atleast two of the keys using the dot notation
*/

let castle={
    title: "Live like a King in my Castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png","img/castle2.png"]
}

console.log(castle.title);
console.log(castle.images);

let player = {
    name: "Adi",
    chips: 2000,
    sayHello: function(){
        console.log("Bhadreshwar");
    }
}
player.sayHello();

// create a person object that contains three keys: name,age,country.
// use yourself as an example to set the values for name,age,country.
// create a function logData() that uses the person object to create a string
// "Per is 35 years old and lives in Norway"
// call the logData() function to verify it works

let person = {
    name: "Aditya",
    age: 21,
    country: "India"
}

function logData(){
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country);
}

logData();