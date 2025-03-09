// console.log("Async Await");

const one = () => Promise.resolve("one");

async function test() {
    console.log("Inside Test Function");
    const result = await one();
    console.log(result)
}

// console.log("Before Calling test function");
// test();
// console.log("After calling test function")


// OutPut
// Before Calling test function
// Inside Test Function
// After calling test function
// one

console.log("Script start");
setTimeout(() => {
    console.log("setTimeout")
}, 0);
new Promise((resolve , reject) => {
    console.log("Promise constructor");
    resolve("Pomise resloved");
}).then( function (res){
     console.log(res)
})

async function asyncFunction() {
    console.log("asyncFunction start");
    await new Promise((resolve) =>{
        console.log("Promise inside asyncFunc");
        resolve("async/await resolved");
    });
}
 asyncFunction();

 console.log("Script end")

//  Script start
//  Promise constructor
//  asyncFunction start
//  Promise inside asyncFunc
//  Script end
//  Pomise resloved
//  setTimeout
