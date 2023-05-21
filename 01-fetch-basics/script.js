// fetch('./movies.json')
// .then((response)=>{
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
// });

// fetching a json file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data)=>console.log(data));

// fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data)=>console.log(data));

// fetching from a github API
fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((data)=>console.log(data));

;


// fetching specific user from github api.
fetch('https://api.github.com/users/sabina')
  .then((response) => response.json())
  .then((data)=>console.log(data));