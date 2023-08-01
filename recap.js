let myCourses = ["Learn CSS Animations","UI Design Fundamentals","Intro to Clean Code"];

//Create a function that takes a single parameter an array
//and logs all the items of the array to the console
//call the function while passing the myCourses array as an argument

function show(arr){
    for(let item of arr){
        console.log(item);
    }
}
show(myCourses);