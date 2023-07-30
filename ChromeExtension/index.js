const buttonEl=document.getElementById("input-btn");
//create two variable
// myLeads : should be assigned to an empty array
// inputEl : should be assigned to the text input field

//Store the delete button in a variable
const delEl = document.getElementById("delete-btn");


let myLeads = [];

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myLead","www.facebook.com");
// console.log(localStorage.getItem("myLead"));
// localStorage.clear(); //clearing the localStorage

//["leads1","leads2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//1. Check if leadsFromLocalStorage is truthy
//2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage){  //in the first time the leadsFromLocalStorage should give a falsy value and thats because it is empty
    myLeads=leadsFromLocalStorage;
    renderLeads();
}

buttonEl.addEventListener("click", ()=>{
    //pushing the value in the text field into the array
    myLeads.push(inputEl.value);
    //clearing the value of the textfield after the button is clicked
    inputEl.value="";
    //save the myLeads array to localStorage
    //PS: remember JSON.stringify()
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();

    //to verify that it works:
    console.log(localStorage.getItem("myLeads"));
});

//listen for the doubleclicks on the delete button
//When clicked clear localStorage myLeads and the DOM
delEl.addEventListener("dblclick",()=>{
    console.log("Double Clicked");
    localStorage.clear();
    myLeads=[];
    renderLeads();
})

//make the list items as the clikable anchor tags
function renderLeads(){
    let listItems = "";
    
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
