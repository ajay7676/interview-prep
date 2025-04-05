// console.log("This")


// Regular Function in Javasrcipt

// function getThis () {
//       console.log(this)
// }
// const obj = {
//     getThis,
// }

// getThis(); // window{}
// obj.getThis(); //  {getThis: f}

// Arrow Function  in Javascript ()In Browser

 const getThis = () =>{
     console.log(this)
 }
 const obj = {
    getThis,
 }

//  getThis(); //Widows{}
//  obj.getThis(); // Widows{}


// Arrow Function v/s Regular Function 

// Regular Function

// document.getElementById("button1").addEventListener("click", function () {
//      console.log(this)
// })
// document.getElementById("button2").addEventListener("click", () => {
//      console.log(this)
// })


// By Akshay Sainii

// 1. this in a global space
console.log(this) // global object Wnidow
 
