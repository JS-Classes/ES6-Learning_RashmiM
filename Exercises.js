
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

function multiplicationTable(m, n, range=10)
{
    for(let i = m; i<=n; i++ )
    {
        console.log(`Multiplication Table for ${i}`)
        for(let x = 1; x<=range; x++)
        {   
            let mul = m*x;              
            console.table(`${i} * ${x} = ${mul}`);
            // console.table(mul);
        }
    }
}
multiplicationTable(4,5);


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

// 1. Find