import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    ulistEl.innerHTML += `<li>${value}</li>`;
    shoppingListEl.appendChild(ulistEl);
}

function addList(){
    const liEl = document.createElement("li");
    liEl.textContent = inputFieldEl.value;
    ulistEl.appendChild(liEl);
    shoppingListEl.appendChild(ulistEl);
}

onValue(shoppingListInDB,(snapshot)=>{
    console.log(snapshot.val());
    let itemsArray = Object.values(snapshot.val());
    console.log(itemsArray);
    shoppingListEl.innerHTML = ""; //so that the newly inserted items are not repeated in the webpage
    itemsArray.forEach(item=>{
        console.log(item);
        displayList(item);
    })
})