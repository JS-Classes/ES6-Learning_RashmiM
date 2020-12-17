// Array destructuring

// let x, y;
 
//  [x, y] = [23, 56, 65]; //unpacking


// let [x, y, ...rest] = [12, 45, 65, 75, 85];

// const numbers = [12, 45, 65, 75, 85];
// [x, y, ...rest] = numbers;
// console.log(rest);


// // let a, b;
// ({x, y, ...rest} = {x : 35, y : 88, z: 76, w: 99});
// console.log(rest);

//Swap value of two variables

let [x, y] = [12, 45];
[x, y] = [y ,x];
console.log(x,y);

// Same thing
// let f = () => [2, 3, 4, 5];

// function f(){
//     return [2, 3, 4, 5]; 
// }




let f = () => [2, 3, 4, 5];
// let [c, d] = f();

let [c,,,d] = f();


// Object examples

const user = {
    id : 1,
    name : 'Bish'
};

const {id, name} = user;

// Computed properties
let key = 'z';
let {[key]: y} = {z: 'fsffad'}

