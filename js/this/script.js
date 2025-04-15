// 1. Global Context (Global Scope)

// console.log(this); /// window

// 2. Regular Function Call

// function myFunction() {
//     console.log(this);// Window Object
    
// }
// myFunction();
// function myFunction2() {
//     "use strict";

//     console.log(this)
    
// }
// myFunction2()

// 3. Object Method

// const obj = {
//     name: "Rahul",
//     greet: function () {
//         console.log(`Hello ${this.name}`)
        
//     }
// }
// obj.greet(); // Hello Rahul

// // 4. Constructor Function (new Keyword)

// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person("Ajay");
//  console.log(person1.name); // Ajay

// 5. Event Listeners

// const btn = document.getElementById("btn");
// btn.addEventListener("click" , function () {
//     console.log(this); //   <button id="btn">Click Me</button>
    
// })

// 6. Arrow Functions

// const obj = {
//     name: "Amit",
//     greet: () => {
//         console.log(this.name); // undefined
//     }
// }
// obj.greet();


// 7. Explicit Binding (call, apply, bind)

// const person = {
//      name: "Neha" 
//     };

// function greet() {
//      console.log(this.name);
// }
// greet.call(person);
// greet.apply(person);
// const boundGreet = greet.bind(person)

// boundGreet();

// 8. Class Context

// class Person {
//    constructor(name){
//     this.name = name;
//    }
//    greet () {
//     console.log(`Hello ${this.name}`)
//    }
// }
// const person1 = new Person("Ajay Chauhan");
//  person1.greet(); // Hello Ajay Chauhan