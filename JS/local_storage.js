// local storage set data
localStorage.setItem("name", "Sabina");
let user = {
    name:"sabina",
    addresss: "lalitpur"
};
localStorage.setItem("user", JSON.stringify(user));

// get data from local storage
document.querySelector("#get-data").addEventListener("click", function(e) {
    let user1 = localStorage.getItem(user);
    console.log(user1);
    let parseData = JSON.parse(user1);
    console.log(parseData);
});

// get data to localstorage
document.querySelector("#set-data").addEventListener("click",function(e) {
    let fruits = ['apple','mango'];
    localStorage.setItem("fruits", JSON.stringify(fruits));
});

// set data to localstorage
document.querySelector("#set-data").addEventListener("click", function(e) {
    let fruits = ["apple","mango","grapes"];
    localStorage.setItem("fruits", JSON.stringify(fruits));
});


// remove data to localstorage
document.querySelector("#remove-data").addEventListener("click", function(e) {
    localStorage.removeItem("name");
});


// set data to localstorage
document.querySelector("#clear-data").addEventListener("click", function(e) {
    localStorage.clear();
});