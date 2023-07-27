// Use .innerHTML to render a Buy! button inside the div container

const divEl = document.getElementById("container");
divEl.innerHTML="<button id='buy-el'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
const buyEl = document.getElementById("buy-el");
buyEl.addEventListener("click",()=>{
    divEl.innerHTML+="<p id='thanks'>Thank You For Buying!</p>";
});