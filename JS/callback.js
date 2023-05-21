// function myDisplayer(some) {
//   document.getElementById("posts").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// // function toggle(e) {
// //   e.target.classList.toggle('danger');
// // }

// // document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' },
// ];

// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post' }, getPosts);


const posts = [
  {title: 'Post Second', body: 'This is the second post'},
  {title: 'Third Post', body: 'This is the third post'},
];

function createNewPost(success, callback) {
  setTimeout(() => {
    posts.push(success);
    callback();
  }, 1000);
}

function createPost() {
  setTimeout(() => {
    posts.forEach(function (success) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${success.title}</strong> - ${success.body}`;
      document.querySelector('#posts').appendChild(div);
    })
  }, 2000);
}

createPost({title: 'Post three', body: 'This is the latest post'}, createPost);

function sayHello() {
  console.log("hello");

}

function add(a,b,callback){
  console.log(a + b);
  callback();
}

const a =2;
const b = 2;
add(a,b,sayHello);

