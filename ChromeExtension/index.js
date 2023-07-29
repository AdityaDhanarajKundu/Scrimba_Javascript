const buttonEl=document.getElementById("input-btn");
//create two variable
// myLeads : should be assigned to an empty array
// inputEl : should be assigned to the text input field

let myLeads = `["www.awesomelead.com"]`;
//1. Turn the myLeads string into an array
console.log(typeof myLeads);
myLeads=JSON.parse(myLeads);
console.log(typeof myLeads);
//2. Push a new value to the array
myLeads.push("www.facebook.com");
//3. Turn the array into a string again
myLeads=JSON.stringify(myLeads);
//4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLead","www.facebook.com");
console.log(localStorage.getItem("myLead"));

//Save a key value pair in the local storage and get the value and show it to the console
localStorage.setItem("myName","AdityaKundu");
let name = localStorage.getItem("myName");
console.log(name);
//clearing the localStorage
localStorage.clear();
console.log(localStorage.getItem("myName")); //this should actually display null in the browser console
console.log(name); //but this should display the value as the value is stored into this name variable before clearing the local storage


//log out the "Button Clicked" when the user clicks the button
//Push the value "www.awesomelead.com" to the array when the button is clicked
buttonEl.addEventListener("click", ()=>{
    //pushing the value in the text field into the array
    myLeads.push(inputEl.value);
    //clearing the value of the textfield after the button is clicked
    inputEl.value="";
    renderLeads();
});

let listItems = "";

//make the list items as the clikable anchor tags
function renderLeads(){
    for(let i=0;i<myLeads.length;i++){
        // listItems+="<li> <a href ='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>";

        //doing just the same above thing but using the template string which is way more convinient way of doing this particular things

        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
            </li>
        `;
    }
    ulEl.innerHTML=listItems;
}