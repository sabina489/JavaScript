// Set Interval
// const timeInterval = setInterval(callbackFunction, 1000, 'javascript');


// function callbackFunction(a) {
//     console.log(a,Date.now());
// }
 

let intervalID;

function changeStart() {
    if(!changeID) {
        changeID = setInterval(alterColor,1000);
    }

}

function alterColor() {
    if (document.body.style.backgroundColor != 'black') {
        document.body.style.Color = 'white';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.Color = 'black';
    }
}


// Clear Interval
function changeTime() {
    clearInterval(timeInterval);
}

// function changeRandomColor() {
//     const randomcolor = Math.floor(Math.random() *12324).toString(10);
//     document.body.style.backgroundColor = `${randomcolor}`;
// }

document.getElementById('start').addEventListener('click', changeStart);
document.getElementById('stop').addEventListener('click', changeTime);
