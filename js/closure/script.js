// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count)
//     }
//     return inner;
    
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2

// Different Cases & Examples of Closures

// 1. Simple Function Closure

// function greet() {
//     let message = "Hello"; 
//     return function (name){
//         console.log(message + " " + name); // Hello Ajay
//     }
    
// }
// const sayHello = greet();
//  sayHello("Ajay")

// 2. Closures in Loops (Common Mistake)
// for(var i = 0 ; i < 3 ; i++){
//     setTimeout(() => { 
//         console.log(i); // 3 , 3 , 3
//     } , 0)
// }

// Solution (Using let or IIFE):

// function testVar() {
//     var x = 10;
//     if (true) {
//         var y = 20;
        
//     }
//     console.log(x); // 10
//     console.log(y); // 20
    
// }
// testVar();
// console.log(x): //  x is not defined 

// 3. Closures in Event Listeners

// function attachEvents() {
//     let count = 0;
//     document.getElementById("btn").addEventListener("click" , function(){
//         count++;
//         console.log("Button Was Clicked" , count , "times")
//          Button Was Clicked 1 times
//     })
// }  

// attachEvents();