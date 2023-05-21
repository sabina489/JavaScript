// Array in JavaScript
// let arr = [1,2,3,4,5,6];


let a;
const arr = ['one', 'apple', 'two'];
arr.length;
a = arr[1];
a = arr[1] + arr[2];
arr[2] = 'like';
a = arr;    
arr.push(10);
arr.pop();
arr.unshift(1); // it add the value in the first index.
 
arr.shift()  // it removes the first index position value.
a = arr.includes('one');
a = arr.reverse();
console.log(a);

// Nested arrays
const b = [1, 2 ,3,4];
const c = ['apple', 'orange', 'grapes'];

d = [b,c];

console.log(d);

// Challenge
const e = [1,2,3,4,5];
e.unshift(0);
e.push(6);
e.reverse();
console.log(e);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
const result = [...arr1, ...arr2];
result.splice(4,1);
console.log(result);

for (i=0;i<=10;i++){
    console.log('Sabina',i);
}

const name = 'sabina';
for (const user of name) {
    console.log(user);
}
