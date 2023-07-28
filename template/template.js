// template strings/literals

const recipient = "James"

//create a sender variable and assign it your name and refactor it into the email
const sender="Aditya Kundu"

// Refactor the email string to use template strings
//Break the email string into multiple lines
const email = ` Hey ${recipient} !

 How is it going? 

 Cheers ${sender}
 `;

console.log(email)