const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
    welcomeEl.textContent = `Welcome Back, ${name}`; 
}

greetUser("Aditya Kundu");