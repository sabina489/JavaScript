// const { timeout } = require("async");

// Get current position
function cursorSuccess(pos) {

    console.log(pos);
}

function cursorError(err) {
    console.log(`Error:${err.code} - ${err.message}`);
}

function options() {
    enableHighAccuracy = true, //User GPS if available
    timeout = 4000 //time to wait to stop trying for location
};


navigator.geolocation.getCurrentPosition(cursorSuccess, cursorError, options);

// Get watch position
function watchSuccess(pos) {

    console.log(pos);
}

function watchError(err) {
    console.log(`Error:${err.code} - ${err.message}`);
}

function watchoptions() {
    enableHighAccuracy = true, //User GPS if available
    timeout = 4000 //time to wait to stop trying for location

    
};

navigator.geolocation.watchPosition(watchSuccess, watchError, watchoptions);