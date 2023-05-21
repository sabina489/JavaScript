// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then((responce)=>responce.json())
// //     .then((data)=>console.log(data))

// const getTodos = () => {
//     fetch(apiURL + '?_limit=10')
//         .then((res)=> res.json())
//         .then((data)=> {
//             data.forEach((todo)=> addToDOM(todo));

//         });
// }

// const addToDOM = (todo) => {
//     const div = document.createElement('div');
//                 div.appendChild(document.createTextNode(todo.title));
//                 div.setAttribute('date-id', todo.id);
//                 div.classList.add('todo');
//                 if (todo.completed) {
//                     div.classList.add('done');
//                 }


//                 document.getElementById('todo-list').appendChild(div);
    
// }

// const createTodo = (e) => {
//     e.preventDefault();
//     // console.log(1);

//     const newTodo = {
//         title: e.target.firstElementChild.value,
//         completed: false
//     };  

//     fetch(apiURL, {
//         method:'POST',
//         body:JSON.stringify(newTodo),
//         headers:{
//             'Content-Type':'application/json',
//         },
//     })
//     .then(res => res.json())
//     .then(data => addToDOM(data))

// };

// const toggleCompleted = (e) => {
//     if (e.target.classList.contains('todo')) {

//     e.target.classList.toggle('done');
//     updateTodo(e.target.dataset.id, e.target.classList.contains('done'));

//     }
// };

// // for update
// const updateTodo = (id, completed) => {
//     // console.log(id,completed);
//     fetch(`${apiURL}/${id}`,{
//         method:'PUT',
//         body:JSON.stringify({completed}),
//         headers:{
//             'Content-Type':'application/json',
//         },
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data));
// };

// // For delete
// const deleteTodo = (e) => {
//     if (e.target.classList.contains('todo')) {
//         const id = e.target.dataset.id;
//         fetch(`${apiURL}/${id}`,{
//             method:'DELETE'
//         })
//         // .then(res=>res.json())
//         // .then(data=>target.remove)

//     }

// };

// const init = () =>{
// getTodos();
// document.querySelector('#todo-form').addEventListener('submit',createTodo);
// document.querySelector('#todo-list').addEventListener('click',toggleCompleted);
// document.querySelector('#todo-list').addEventListener('click',updateTodo);

// document.querySelector('#todo-list').addEventListener('dblclick',deleteTodo);


// };



// init();

// // const addTodoToDOM = (todo) => {
// //     const div = document.createElement('div');
// //     div.classList.add('todo');
// //     div.appendChild(document.createTextNode(todo.title));
// //     div.setAttribute('date-id', todo.id);

// //     if (todo.completed) {
// //         div.classList.add('done');
// //     }
// //     document.getElementById('todo-list').appendChild(div);
// // }


// Github api
// const APIURL = "https://api.github.com/users/";

// const container = document.querySelector('.container');

// const getUser = async(username) => {
//     const response = await fetch(APIURL + username);
//     const data = await response.json();
//     const container_header = `
//     <header>
//     <h1>Typicode Todos</h1>
//   </header>
//   <main>
//     <form id="todo-form">
//       <input type="text" id="title" placeholder="Add Todo..." />
//       <button type="submit">Add</button>
//     </form>

//     <div id="todo-list"></div>
//   </main>
//     `
//     console.log(data);
// }

// getUser('sabina');

// const getRepos = async(username) => {
//     const response = await fetch(APIURL + username + "/repos");
//     const data = await response.json();
//     console.log(data);
// }

var form = document.getElementById("myForm")

let data;

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('')

    // document.getElementById("result").innerHTML = ""
    // alert(originalName);
    // alert(search);
   data = fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data,"inside then block");
        document.querySelector(".result").innerHTML = `
            <a target="_blank" href="https://api.github.com/${originalName}"> <img src="${data?.avatar_url}"/></a>
        `  
    });
    console.log(data,'outside then block');
    // if(data){
    //     console.log(data.avatar_url,"sadfad");
        
    // }
  
})

