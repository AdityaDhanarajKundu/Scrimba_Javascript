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