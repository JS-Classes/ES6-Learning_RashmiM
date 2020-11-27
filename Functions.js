//function addTwoNumbers //camel case
//function AddTwoNumbers //pascal case

function square(number) 
{
    let squared = number * number;
    return squared;
}
let s = square(5);
console.log(s);

//Function expression: anonymous function -- function without name
var func1 = function (number) 
{
    let squared = number * number;
    return squared;
}
let s1 = func1(6);
console.log(s1);

//Arrow function

var fun2 = number => number * number;
(a, b) => {
    let sum = a + b;
    return sum;
}

//Closure
//Example 1
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
let inside_fn = outside(10); //Give me a function that adds 10 to whatever comes to it
let result = inside_fn(40);
console.log(result);

//Example 2
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    let result = square(a) + square(b);
    return result;
}

let r = addSquares(2, 2);
console.log(r);

//Example 3
let createPet = function (name) {
    return  {
        setName: function(newName) {
            name = newName;
        },
        getName: function() {
            return name;
        }
    }
}
let dog = createPet('Diamond');

//Using Arrow Function
// let createPet = name => {
//     return  {
//         setName: newName => name = newName,
//         getName: () => name
//         }
// }
// let dog = createPet('Diamond');
// console.log(dog);

//Parameters

function formatName(name, address,salutation = "Ms.") {
    let completeName = salutation +","+ name + "," + address;
    return completeName;
}
let n = formatName("rashmi maharjan", "ktm","Ms.");
let n1 = formatName("rashmi maharjan", "ktm");
console.log(n);
console.log(n1);

//Rest Parameters
function add(a, b, ...moreArgs) {
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}
add(22, 11);
add(22,11,33,44,55,66);




