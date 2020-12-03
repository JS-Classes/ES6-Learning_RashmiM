
// Find matching numbers in a paragraph using regex?


let number = "The regular exp243 in the 2020s when they are 24377ncs";
let regexNumbers = /\d+/g;   //+, *,? (Quantifier)
let matches = number.match(regexNumbers);

console.log(matches);

// Find matching email using regex

let email = "asdad21bb@gmail.com dad34@xyz.net";
let regexEmail = /[a-z]+\w*@[a-z]+.(com|net)/g;
let correctEmails = email.match(regexEmail)
console.log(correctEmails);
