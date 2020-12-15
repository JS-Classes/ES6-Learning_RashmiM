const authors = ["Rashmi","Ram","Hari"];

authors.push("Sheprata");

console.log(authors);

authors.pop("sheprata");
console.log(authors);
console.log(authors.length);

let f = authors[0];
let l = authors[authors.length - 1];

authors.shift("Ram"); //Remove
authors.unshift("Dhriti");
console.log(authors);

authors.splice(2, 1);
console.log(authors);

let isTheresAnyNameStartingWithB = authors.some(x => x.startsWith("B"));
let areAllNameStartingWithB = authors.every(x => x.startsWith("B"));

authors.slice(2, 5);



let sum = (x, y, z) => x + y + z;
let numbers = [3,2,4,6,7,8];

console.log(sum(...numbers));


const allNumbers = [34, 55, ...numbers, 12, 23];
const allNumberss = [...allNumbers];

console.log(allNumberss);