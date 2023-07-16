let myPoints = 3;

function add3Points(){
    myPoints = myPoints+3;
}

function remove1Point(){
    myPoints -= 1;
}

//Call the functions to that the line below logs out 10
add3Points();
add3Points();
remove1Point();
remove1Point();
add3Points();
console.log(myPoints);