const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({name:'sabina',age:23});

    },2000);

});

// promise.then((data) => console.log(data));


async function getPromise() {
    const response = await promise;
    console.log(response);
}

// getPromise();

// async function takeUser() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// takeUser();

// arrow async function
const takeUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
takeUser();

// async and await error handling
const getUser = async () => {
    try {
        const respone = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await respone.json();
        console.log(data);
    } catch{
        console.log(error);
    }
}

getUser();
// we can also handle async await error as: 
// getUser().catch((error) => console.log(error));