const buttonEl=document.getElementById("input-btn");
//create two variable
// myLeads : should be assigned to an empty array
// inputEl : should be assigned to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
//log out the "Button Clicked" when the user clicks the button
//Push the value "www.awesomelead.com" to the array when the button is clicked
buttonEl.addEventListener("click", ()=>{
    //pushing the value in the text field into the array
    myLeads.push(inputEl.value);
    renderLeads();
    //clearing the value of the textfield after the button is clicked
    inputEl.value="";
});

let listItems = "";

function renderLeads(){
    for(let i=0;i<myLeads.length;i++){
        listItems+="<li>"+myLeads[i]+"</li>";
    }
    ulEl.innerHTML=listItems;
}