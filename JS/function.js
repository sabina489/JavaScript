function sayHello() {
    console.log('Learn JavaScript');
}
sayHello();

// declare the function
// number1, number 2 are parameters
function multiply(number1, number2) {
    console.log(number1 * number2);
}


// call the function
// 2 9 are arguments
multiply(2, 9);

function add(number1,number2) {
    return number1 + number2;
}

const result = add(2,4);
console.log(result);


// default parameters
function registerUser(person = 'john') {
    // if(!person) {
    //     person = 'John';
    // }
    return person + 'is entered';
}

console.log(registerUser())

// other parameters
// rest operator ... help us to pass unlimited numbers of parameters
function sum(...numbers) {
    let total = 0

    for (const num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum(3,4,5,6,1,2));

// objects as parameters
function addUser(user) {
    return `The user ${user.name} is added of id ${user.id}`;
}

const user ={
    id:5,
    name:'sabina',
}

console.log(addUser(user));

// Arrays params in function
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * length);
    const item = arr[randomIndex];
    console.log(item);
}


getRandom(1,2,3);

// scope of variable in Javascript
let p = "code"
// console.log(learn);  variable declared inside the function cannot be access.
function Learn() {
    console.log(p);  //global variable can be accessed
}
Learn();

function Coding() {
    const learn = 'function';
    console.log(learn);
}

Coding();

// var is function scope
function var_eg() {
    var i = '2';
    
    console.log(i);
    
}
var_eg();
// console.log(i);

// Nested scope
function nested_eg() {
    const nested_1 = 1;
    


    function nested_2() {
        const nested_2 = 3;
        console.log(nested_1 +  nested_2);
    }
    console.log(nested_2);
    nested_2();
}

nested_eg();

// function declaration
function addDollarSign(value) {
    return '$' + value;
};   //Immediately Invoked Function Expression
 
console.log(addDollarSign(10));

// function expression
// const addPlusSign = function(num){
//     return '+' num;
// };
// console.log(addPlusSign(20));

//  arrow function
const sub = (x,y) => {
    return x - y;
}
console.log(sub(4,2));

const multiply_num = (multiplynumber) => multiplynumber * 2;
console.log(multiply_num(2));

// implicit return
const cal = (p,q) => p * q;

// for single parameter, we can take ()
const calculate = a => a /1;
console.log(cal(4,5));
console.log(calculate(1));


// Immediately Invoked Function Expressions
( function () {
    const user ='John';
    console.log(user);
    const greeting = () => console.log('Hello javascript');
    greeting();
}
)();

// Challenge
function getCelsius(f) {
    const celsius = (f-32) *5 /9;
    // console.log(celsius);
    return celsius;
}
console.log
getCelsius(0);

// try and catch block
function double(number) {
    if (isNaN(number)) {
        throw new Error(number + 'no number')
    }

    return number * 2;
}

try {
    const a = double('trycatch');
    console.log(a);
}
catch(error) {
    console.log(error);
}