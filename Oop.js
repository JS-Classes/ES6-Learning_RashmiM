let user1 = {name: "Pretty",age:25,email:"dads@gmail.com"};
let user2 = {name: "Shaddie",age:26,email:"ads@gmail.com"};
let user3 = {name: "Chester",age:27,email:"ds@gmail.com"};

// ES5
// function User(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }
// let user4 = new User("Pretty",25,"dads@gmail.com");
// let user5 = new User("Saddie",26,"ads@gmail.com");
// let user6 = new User("Chester",27,"ds@gmail.com");
// console.log(user4);

//ES6
class User{
    constructor(name, age, email){
        this._name = name;
        this.age = age;
        this.email = email;
    }
    // instance method
    increaseAge(){
        this.age++;
    }
    // static method
    static walk() {
        console.log("Users do walk. Hey I am from static method.");
    }
    // properties
    get name()
    {
        return this._name;
    }
    set name(newValue)
    {
        this._name = newValue;
    }
}
let user7 = new User("Pretty",25,"dads@gmail.com");
let user8 = new User("Saddie",50,"ads@gmail.com");
let user9 = new User("Chester",75,"ds@gmail.com");

user7.increaseAge();
user7.name;
user7.name = "Whitey";
console.log(user7);

User.walk();

class Employee extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this._role = role;
    }
    get role() {
        return this._role;
    }
    set role(newValue) {
        this._role = newValue;
    }
}

var Employee1 = new Employee("Jane", 30, "asd@gmail.com", "Programmer");
Employee1.increaseAge();
console.log(Employee1);

