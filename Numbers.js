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



// 1. Find sd of set of numbers

let GetSD = (numbers) => {
    // Finding mean
    let sum = 0;
    const numberOfItems = numbers.length;
    for (const num of numbers){
        sum += num;
    }
    const mean = sum / numberOfItems;

    // finding sum[(x - mean)^2]
    let sqrDiffSum = 0;
    for (const num of numbers) {
        let diff = num - mean;
        let sqrtdiff = Math.pow(diff, 2);
        sqrDiffSum += sqrtdiff; 
    }

    // finding sd
    const sd = Math.sqrt(sqrDiffSum / numberOfItems);
    return sd;
}
const ages = [23, 45, 23,54,65,68];
let sdAges = GetSD(ages);
console.log(`Standard Deviation of ages: ${sdAges}`);