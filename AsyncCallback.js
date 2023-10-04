// AsyncCallback.js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 2000);
}

fetchData(data => {
    console.log(data);
});
