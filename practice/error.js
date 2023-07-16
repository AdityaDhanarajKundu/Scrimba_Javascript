// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let message = "Something went wrong, please try again";

function errorMessage(){
    document.getElementById("error").innerText=message;
}