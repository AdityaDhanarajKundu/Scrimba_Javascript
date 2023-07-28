let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

//Render the leads in the unordered list using the ulEl.textcontent
//not the correct/recommended way to do 
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent+=myLeads[i];
}

//Render the leads in the unordered list using the ulEl.innerText
//the actual correct way
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML+="<li>"+myLeads[i]+"</li>";
}

//Trying a different method to do the same thing
//create an element (using the createElement method)
//set the text content
//append to ul

for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li"); //creating the list tag element and storing in a variable named li
    li.textContent += myLeads[i]; //setting the text content
    ulEl.appendChild(li); //append it to the parent tag
}

//another way to do the same but increasing the readibility and the performance
//create a variable listItems to hold all the HTML for the list items
//Assign it to an empty string to begin with
let listItems="";
for(let i=0;i<myLeads.length;i++){
    listItems+="<li>"+myLeads[i]+"</li>"; //stores all the list items into the variable
}

//Rendering the items inside the unorder list tag using the innerHTML method
ulEl.innerHTML = listItems;

