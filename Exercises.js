
// 1. Program to print multiplication table for a number

// // function multiplication()
// for(let x=1; x<=10; x++){
//     let y =2;
//     console.log(x*y);
// }

// // 2. Program to print multiplication table for a number upto some range

// function Multiplication(y,range=10)
// {
//     for(let x=1; x<=6; x++)
//     {
//     let mul = y*x;
//     console.log(mul);
//     }
// }
// Multiplication(2);

// 3. Program to print multiplication table for numbers from m to n.

// function MultiplicationTable(m, n, range = 10) {
//     for (let num = m; num <= n; num++) {
//         console.log(`Multiplication Table for ${num} till the multiplication range ${range} is :`)
//         for (let i = 1; i <= range; i++) {
//             let multiply = num * i;
//             console.log(`${num} * ${i} = ${multiply}`);

//         }
//     }
// }

// MultiplicationTable(2, 4, 20);

// Array of objects

// const people = [
//     {name: 'Rashmi', dob:'424223',isMale:true},
//     {name: 'Bob', dob:'535465',isMale:false},

// ];
// console.table(people);
// process.stdout.write("Hey");
// process.stdout.write("Hey");
// process.stdout.write("Hey");

// 1. Declare a string variable with paragraph as value. Display following stat:
// a. Number of sentences, words and word characters
// b. NUmber of special characters
// c. Number of vowels and consonants




// 2. Find a random string of particular length

// let r = Math.random().toString(36).substring(7);
// console.log("fkdsjf423dkhs66698", r);


// let getRandomString = (length) => {
//     const wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     let randomString = '';

//     for (let i =0; i < length; i++) {
//         let randomNum = Math.random() * wordChars.length;
//         let index = Math.floor(randomNum);
//         let c = wordChars.charAt(index);
//         randomString += c;
//     }
//     return randomString;
// }
// let randString = getRandomString(20);

// console.log(randString);

// // console.log('A'.charCodeAt(0));

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(20));




