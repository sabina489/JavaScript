const post = {
    title: "javascript",
}

// Convert to JSON string
const str = JSON.stringify(post);

// parse JSON
const obj = JSON.parse(str);

console.log(obj);