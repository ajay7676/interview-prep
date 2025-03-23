// Basic Method of Inheritance

let fanng = {
    name: "Google",
    salary : function () {
        console.log("500K Salary");
    }
}
let engineer = {
    empId: 12231,
    task: function () {
       console.log("Task asssigned") ;

    }
}

engineer.__proto__=fanng;

// console.log(engineer);

// engineer.salary();

/**
 * OUTPUT
 * { empId: 12231, task: [Function: task] }
 * 500K Salary
 */


let fanng2 = {
    name: "Google",
    salary : function () {
        console.log("600K Salary");
    }
}
let engineer2 = Object.create(fanng2 ,
    {
      taskAssigned: {
        value: 2
      } 
    }
);

console.log(engineer2.salary());
console.log(engineer2.taskAssigned);
/**
 * OUTPUT
 * 600K Salary
 *  2
 */

//  Method of Prototype inheritance

/**
 * Object.create();
Object.getPrototypeOf();
Object.setPrototypeOf();
 */

const obj = {};
const parent = { foo: "bar" };
console.log(obj.foo); // undefined
Object.setPrototypeOf(obj, parent);
console.log(obj.foo); // bar

const prototype1 = {};
const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1) === prototype1);// true

console.log("Checking undefined == null")
console.log(undefined == null)