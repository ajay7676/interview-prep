console.log("Start");

setTimeout(() => {
    console.log("Timeout")
}, 0);

Promise.resolve("Resolve!")
.then(res => console.log(res));

console.log("End")

// Output
// Start
// End
// Resolve!
// Timeout