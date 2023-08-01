// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

const containerEl = document.getElementById("container");

function renderImages(){
    let imgsDOM="";
    for(let i=0; i<imgs.length;i++){
        imgsDOM+=`
        <img alt="Employee in the company" class="team-img" src=${imgs[i]}>
        `;
    }
    containerEl.innerHTML=imgsDOM;
}

renderImages();