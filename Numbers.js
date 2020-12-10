// const a = 1323;
// const a = 0b10010101001; //Binary
// const b = 0o2321; //Octal
// const c = 0x12AF; //Hex

// // // Number API
// let age = "67";
// let ageNumber = Number.parseInt(age);
// let ageNumber = Number.parseFloat(age);
// console.log(ageNumber);

// Number.isNaN();
// Number.isInteger();
// Number.isFinite();
// console.log(typeof NaN);

 // Math API


// Math.abs(-89);
// Math.pow(2);
// let r = Math.random(); //[0, 1) 0 inclusive, 1 exclusive
// console.log(r);


// 1. Find a random number between provided m and n


// let getRandomNumber = (m, n) => m + Math.random() * (n - m);
// console.log(getRandomNumber(40,50));

// 2. Find a random string of particular length

let r = Math.random().toString(36).substring(7);
console.log("fkdsjf423dkhs66698", r);
