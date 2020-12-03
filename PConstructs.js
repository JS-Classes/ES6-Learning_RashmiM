// if..elseif if..else

// let x = 34;
// if(x < = 45)
// {

// }
// else if(x < 60)
// {

// }
// else
// {

// }

// // switch
// let y = "b";
// switch(y)
// {
//     case "a":

//         break;
//     case "b":
//     case "c":

//         break;
//     default:
// }

// Loops

// for(let i = 0; i < 10; i++)
// {
//     console.log(i+1);
// }
// let i=0;
// while(i < 10)
// {
//     console.log(i+1);
//     i++;
// }
let ii=0;
do
{
    console.log(ii+1);
    ii++;
}while (ii < 10);

let numbers = [32,544,232,3231,41];
// for (let number of numbers)
// {
//     console.log(number);
// }

for (const number of numbers)
{
    console.log(number);
}

let person = {name: 'Sam', address:'PKR'};

for(let p in person)
{
    // console.log(p);
    console.log(`${p} = ${person[p]}`);
}

// break, continue : label

// for(let x=0; x<10; x++){
//     if(x ==5){
//         continue;
//     }
//     console.log(x);
// }

// for(let x=0; x<10; x++){
//     if(x ==5){
//         break;
//     }
//     console.log(x);
// }

// if("2" == 2 ){
//     console.log("how does it happen?");
// }

outer:
for(let x=0; x<5; x++){
    inner:
    for(let y = 0; y<5; y++){
        if (x === 3 && y ===3){
            break outer;
        }
        console.log(`x=${x} y =${y}`);
    }
}
