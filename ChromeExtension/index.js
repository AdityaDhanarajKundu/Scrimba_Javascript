const buttonEl=document.getElementById("input-btn");
//create two variable
// myLeads : should be assigned to an empty array
// inputEl : should be assigned to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el");

//log out the "Button Clicked" when the user clicks the button
buttonEl.addEventListener("click", ()=>{
    console.log("Button clicked");
    alert("Input has been saved");
});