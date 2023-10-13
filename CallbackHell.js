// CallbackHell.js
function first(callback) {
    setTimeout(() => {
        console.log("First function executed.");
        callback();
    }, 1000);
}

function second(callback) {
    setTimeout(() => {
        console.log("Second function executed.");
        callback();
    }, 1000);
}

function third() {
    console.log("Third function executed.");
}

first(() => {
    second(() => {
        third();
    });
});
