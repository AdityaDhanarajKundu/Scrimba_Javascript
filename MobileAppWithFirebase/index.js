import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push,onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://realtime-database-bd3da-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

//initialising the app variable connecting the firebase database url
const app = initializeApp(appSettings)

//setting up the database variable 
const database = getDatabase(app);

//creating a referrence variable to create a variable in the DB to store the shopping items in the DB
const shoppingListInDB = ref(database,"shoppingList");

console.log(app);
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shoppingList");
const ulistEl = document.createElement("ul");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB,inputValue);
    console.log(`${inputValue} is added to the database`);
    clearInput();
})

function clearInput(){
    inputFieldEl.value = "";
}

function displayList(value){
    let id = value[0];
    let databaseItemValue = value[1];
    const newEl = document.createElement("li");
    newEl.textContent = databaseItemValue;

    //function to delete the list values upon double clicking on them
    newEl.addEventListener("dblclick",()=>{
        console.log(`${databaseItemValue} is removed`);
        
        //getting the itemID whose corresponding id we want to delete from the firebase database the ref method from the firebase database
        let exactLocationInDB = ref(database,`shoppingList/${id}`);

        //using the remove function from the firebase on the reference variable
        // of the exactLocation to remove the corresponding data from the database
        remove(exactLocationInDB);
    });
    ulistEl.appendChild(newEl);
}


function clearShoppingListEl(){
    ulistEl.innerHTML = "";
}

onValue(shoppingListInDB,(snapshot)=>{

    let itemsArray = Object.entries(snapshot.val());
    console.log(itemsArray);
    clearShoppingListEl(); //so that the newly inserted items are not repeated in the webpage
    for(let i=0; i<itemsArray.length;i++){
        let currentItem = itemsArray[i];
        //append to ul
        displayList(currentItem);
    }
    shoppingListEl.appendChild(ulistEl);
})