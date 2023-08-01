const buttonEl=document.getElementById("input-btn");
const delEl = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//1. Check if leadsFromLocalStorage is truthy
//2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage){  //in the first time the leadsFromLocalStorage should give a falsy value and thats because it is empty
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

//Getting the url of the current tab on the current window using the chrome API strictly for chrome extensions
//save the url to the localStorage
saveBtn.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true},(tabs)=>{
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    });
});

//make the list items as the clikable anchor tags
function render(leads){
    let listItems = "";
    
    for(let i=0;i<leads.length;i++){
        // listItems+="<li> <a href ='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>";

        //doing just the same above thing but using the template string which is way more convinient way of doing this particular things

        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
            </li>
        `;
    }
    ulEl.innerHTML=listItems;
}

buttonEl.addEventListener("click", ()=>{
    //pushing the value in the text field into the array
    myLeads.push(inputEl.value);
    //clearing the value of the textfield after the button is clicked
    inputEl.value="";
    //save the myLeads array to localStorage
    //PS: remember JSON.stringify()
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);

    //to verify that it works:
    console.log(localStorage.getItem("myLeads"));
});

//listen for the doubleclicks on the delete button
//When clicked clear localStorage myLeads and the DOM
delEl.addEventListener("dblclick",()=>{
    console.log("Double Clicked");
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})
