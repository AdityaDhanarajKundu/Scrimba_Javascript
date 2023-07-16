let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

//this function will is invoked in the button tag of the html file and will run onclick action event of the button
function homeAddOne(){
    homeScoreEl.textContent++;
}

//the function will be invoked in this file itself referencing to a html in the html file
function homeAddTwo(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent)+2;
}

homeScoreBtnTwo.addEventListener("click",homeAddTwo);

//Or we can directly write the function that will run upon a certain action performed
//directly in the eventListner method in js file referencing to the html tag

homeScoreBtnThree.addEventListener("click",function(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent)+3;
});

resetHomeScore.addEventListener("click",function(){
    homeScoreEl.textContent = 0;
});

function guestAddOne(){
    guestScoreEl.textContent++;
}

function guestAddTwo(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent)+2;
}

guestScoreBtnTwo.addEventListener("click",guestAddTwo);

guestScoreBtnThree.addEventListener("click",function(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent)+3;
});

resetGuestScore.addEventListener("click",function(){
    guestScoreEl.textContent= 0;
});
