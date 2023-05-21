console.log("hello");
// alert("js");

console.table({name:'sabina', age:'23', college:'AIC'})

const a = 2;

console.log(a);
 

  console.warn("warning");

const style = 'padding:10px 10px; color:red';


console.log("hello", style);


// Declaring the variables
let firstName = 'Sabina';
let lastName = 'Karki';
console.log(firstName, lastName);

const arr =  [1,2,3,4]
arr.pop();
console.log(arr)

let first = 100
// type conversion
first = parseInt(first);
console.log(first);
// first = 6

function sabina(){
    {
    var age = 23;
    // let num = 20;
    }
    console.log("sabina karki" + age)
    console.log(age,"age");
}
sabina()


// declaring variables using const 
const person = {
    name: 'john'
};

person.name = 'John';
person.email = 'john123@gmail.com';

console.log(person);


// We can also declare multiple variable
// let a, b, c;

const d= 10, e=5,f=2;
console.log(d, e,f);

// Data types
//string
const news = 'javascript';
const latestNews = news;
console.log(news, latestNews);
console.log(typeof latestNews);

//numbers
const numbers = [1,3,4,6];
console.log(numbers, typeof numbers);

//boolean
const learn = true;
console.log(learn, typeof learn)

// function sayHello() {
//     console.log('hello');
// }


// const output = sayHello;
// console.log(output, typeof output);


// Type conversion
let amount = 0;
//change string to decimal
amount = parseFloat(amount);

//convert number to boolean
amount = Boolean(amount);

// convert number to string
amount = amount.toString();
amount = String(amount);

console.log(amount, typeof amount);


let tutorial = '100';

tutorial = parseInt(tutorial);

console.log(tutorial, typeof tutorial);


// Arithmetic Operators
let x ;
x = 2 +2;
// x = 2-2;

// increment operators
let i = 2;
// i = i + 1;
i++;
console.log(i);

// Assigment operators
 m = 10;
// m + 5;
m /2;
console.log(m);

// comparision operators
c = 2 ==='2';
console.log(c);


//concatenation
let join
join= 'hello' + ' ' + 'john';
console.log(join);

// type coercion
// let c;
// c = 4 + '4';
// c = 4 + Number('4');
// console.log(c, typeof c);

// Working with string
let t;
const say = 'bye';
const second = 'kathmandu';

t = 'Hello this is' + say + second;


const s = new String ('Learn JavaScript');
const str = 'Learn JavaScript';
// s = typeof (s);
console.log(str, s);

// const num = '12';
// const number = parseInt(num);
// console.log(number, typeof number);


// Challenge part
const challengeString = 'developer';
let myNewString;
myNewString = challengeString.charAt(0).toUpperCase() + challengeString.substring(1);
console.log(myNewString);


// Working with numbers
let w;

const num = new Number(19.436547567);

w = num.toString();

w = num.toString().length;

w = num.toFixed(2)

w = Number.MAX_VALUE;

console.log(w, typeof w);

// Math object
let o;
o = Math.sqrt(4);
o = Math.round(4.34343);
o = Math.pow(2,4);
o = Math.min(1,2,3,4, 0);
o = Math.max(10,2,3,4,9);
o = Math.floor(Math.random() * 10 + 1 );
console.log(o);

// Math Challenge
const p = Math.floor(Math.random() * 100 +1);
const q = Math.floor(Math.random() * 50 +1);

const sum = p + q;

// const diff = p - q;

const Output = `${p} + ${q} = ${sum}`;


console.log(Output);

// Date and time
let k;
// k = Date();
k = new Date();
k = k.toString();
k = new Date(2023, 11, 1);


console.log(k);

let ti;
ti = Date.now();
// ti = k.getHours();
// ti = k.getMilliseconds();
ti = `${k.getFullYear()} - ${k.getMonth()} - ${k.getDay()}`

ti = Intl.DateTimeFormat('default').format(k);

// ti = Math.floor(Date.now() / 1000);
console.log(ti);

// SetTimeout
// setTimeout(updateTime, 1000);

function updateTime() {
document.querySelector('h1').textContent = "learn JavaScript.";
}

// Also we can assign to a variable.
const timerId = setTimeout(updateTime, 3000);

// celarTimeout
document.querySelector('#cancel', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('cancel recent time');

});