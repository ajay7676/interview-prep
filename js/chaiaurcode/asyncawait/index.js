
const one = () => Promise.resolve("one");

const test = async () => {
    console.log("Inside test function");
    const result = await one();
    console.log(result);
}

// console.log("Before Calling test Function");
//  test();
//  console.log("After calling test function");

 /**
  * OUTPUT
  * Before Calling test Function
  * Inside test function
  * After calling test function
  * one
  */ 

 console.log("Script Start");

 setTimeout(() => {
    console.log("setTimeOut");
    
 }, 0);
 
 new Promise((resolve,reject)=>{
    console.log("Promise Construtor");
    resolve("Promise resolved");
 }).then((resolve) =>{
     console.log(resolve)
 });

 const asyncFunction = async () =>{
   console.log("asyncFunc start");
   await new Promise((resolve) => {
      console.log("Promise inside asyncFunction");
      resolve('async/await resolved');
   });
   console.log("asyncFunc end");
 }
 asyncFunction();
 console.log("Script end");

 /**
  * OUTPUT
  * Script Start
  * Promise Construtor
  * asyncFunc start
  * Promise inside asyncFunction
  * Script end
  * Promise resolved
  * asyncFunc end
  * setTimeOut
  */ 

