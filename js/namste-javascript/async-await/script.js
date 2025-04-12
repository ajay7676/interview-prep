// async function getDate() {
//     return "Ajay"
// }

// const dataPromise = getDate();
// console.log(dataPromise)

// const p = new Promise((resolve,reject) =>{
//       setTimeout(() =>{
//        resolve("Promise Resolved")
//       },10000)
// });

// async function handlePromiseOne() {

//        console.log("Async Await");
//        const value = await p;
//        console.log("Namaste Javascript");
//        console.log(value)
       
// }
// handlePromiseOne();
// Async Await
// script.js:18 Namaste Javascript
// script.js:19 Promise Resolved
const p1 = new Promise((resolve,reject) =>{
       setTimeout(() =>{
        resolve("Promise Resolved 1")
       },20000)
 });
const p2 = new Promise((resolve,reject) =>{
       setTimeout(() =>{
        resolve("Promise Resolved 2")
       },40000)
 });
 
 async function handlePromiseTwo() {
 
        console.log("Async Await");
        const value1 = await p1;
        console.log("Namaste Javascript 1");
        console.log(value1);
        const value2 = await p2;
        console.log("Namaste Javascript 2");
        console.log(value2)
      
        
 }

//  handlePromiseTwo();

//  Async Await
//  Print ::after 20sec
//  Namaste Javascript 1
//  Promise Resolved 1
//  Print ::after 40sec
//  Namaste Javascript 2
//  Promise Resolved 2

// const API_URL = "https://api.github.com/users/ajay7676"
// const handlePromise = async () => {
//        const data = await fetch(API_URL);
//        console.log("Data::", data)
//        const githubUser = await data.json();
//        console.log(githubUser)
       
// }

// handlePromise();

const API_URL = "https://api.github.com/users/ajay7676"
const handleErrAsyncAwait = async () => {
       try {
              const data = await fetch(API_URL);
              const githubUser = await data.json();
              console.log(githubUser)
       } catch (error) {
              console.log("Errr::" , error)
              
       }
       
}

handleErrAsyncAwait();
