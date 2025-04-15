// 1. Promise.all() : 
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("P1 was resolved")
//     }, 3000);
// })
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("P2 was resolved")
//         // reject("P2 Failed")
//     }, 1000);
// })
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         // resolve("P3 was resolved")
//         reject("P3 Failed")

//     }, 2000);
// })


// Promise.all([p1,p2,p3])
// .then((result) => console.log(result))
// .catch((error) => console.error(error))
 
//  Promise.allSettled(): 

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("P1 was resolved")
//     }, 3000);
// })
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("P2 was resolved")
//         // reject("P2 Failed")
//     }, 1000);
// })
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         // resolve("P3 was resolved")
//         reject("P3 Failed")

//     }, 2000);
// })


// Promise.allSettled([p1,p2,p3])
// .then((result) => console.log(result))
// .catch((error) => console.error(error))

// Promise.race():::
const p1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("P1 was resolved")
    }, 3000);
})
const p2 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        // resolve("P2 was resolved")
        reject("P2 Failed")
    }, 1000);
})
const p3 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("P3 was resolved")
        // reject("P3 Failed")

    }, 2000);
})


Promise.race([p1,p2,p3])
.then((result) => console.log(result))
.catch((error) => console.error(error))


// Promise.any() :::

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         // resolve("P1 was resolved")
//         reject("P1 Failed")
//     }, 3000);
// })
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         // resolve("P2 was resolved")
//         reject("P2 Failed")
//     }, 1000);
// })
// const p3 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         // resolve("P3 was resolved")
//         reject("P3 Failed")

//     }, 2000);
// })


// Promise.any([p1,p2,p3])
// .then((result) => console.log(result))
// .catch((error) => console.error(error))

// AggregateError: All promises were rejected