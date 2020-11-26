//Redeclaration allowed //Global scoped
var x = 5;
//1000 lines of code
var x = "dfsd";

//var is function scoped or global
function add()
{
    var xx = "dsd";
}

//var can be Hoisted
console.log(age);
var age = 55;


//Redeclaration not allowed but can mutate
let y = 55;
y = "rewr";

//No mutation allowed
const z = true;
// z = false;

//Block scoped:let and const
function add1()
{
    var xx = "dsd";
    if(xx == "")
    {
        let x = 23.4;
    }
}
