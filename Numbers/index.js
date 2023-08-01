// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");

//toFixed method rounds the method upto the mentioned number of decimal places.
//Normally it returns a string so we type casted into a Number
const roundedPrice = Number(totalPrice.toFixed(2));

btn.textContent = `Buy €${ roundedPrice }`;

