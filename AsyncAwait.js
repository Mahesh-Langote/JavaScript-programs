// AsyncAwait.js
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function fetchDataAsync() {
    let data = await fetchData();
    console.log(data);
}

fetchDataAsync();
