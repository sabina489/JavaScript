const item = {
    name: "Sabina",
    age:"23",
    IsAdmin:true,
    // an object within the object
    addresss:{
        city:'Dhobighat',
        country:'Nepal',
    },
    details:{
        father_name:'Mohan',
        mother_name:'Indira',
    }

}

console.log(item);

// access the specific object.
i = item.name;
i = item['age'];
i = item.addresss;
// update the properties
item.name = "Saru";
// delete the properties
delete item.age;
i = item;
console.log(i);

let x;
const todo = new Object();
todo.id = 1;
todo.name = 'John';
todo.learn = true;
x = todo;
console.log(x);

// Spread Operators
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3 = {...obj1, ...obj2};
o = obj3;
console.log(o);

// Array objects
const b = [
    { id:3, address:'ktm' },
    {id: 6, address:'pokhara'},

]
n = b[0].address;

console.log(n);

// Destructuring 
const des = {id: 6, address:'Bardibas'};
const {id, address} = des;
console.log(id, address);

// Challenge
const library = [
    {
        title: 'The Road',
        author: 'Bill Gates',
        status :{
            own: true,
            reading:true,
            read:false
        }
    }, {
        title: 'Muna Madan',
        author: 'Laxmi Prasad',
        status :{
            own: true,
            reading:true,
            read:false
        }
    }, {
        title: 'The Road',
        author: 'Bill Gates',
        status :{
            own: true,
            reading:true,
            read:false
        }
    }
];


library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Convet to JSON string
const str = JSON.stringify(library);

console.log(library);
console.log(str);

