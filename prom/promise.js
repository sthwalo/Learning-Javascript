const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('Hello from Promise 1');
    }, 2000);
});

const p2 = (data) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(`Hello from Promise 2, received data: ${data}`);
    }, 1000);
});

// Chain the promises
p1.then((resultFromP1) => {
    console.log(resultFromP1);  // Output from p1
    return p2(resultFromP1);    // Pass result from p1 to p2
})
.then((resultFromP2) => {
    console.log(resultFromP2);  // Output from p2
})
.catch((error) => {
    console.error("Error:", error);  // Handle any errors
});

