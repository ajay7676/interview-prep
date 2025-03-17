// console.log("ProtoType");


//  Basic Example of Proto type

//  Exmple 1
let faang = {
    name: "google" ,
    salary : function () {
        console.log("500K Salary");
    }
}
let engineer = {
    empId : 12231,
    task: function () {
        console.log("Task Assigned")
    }
}
engineer.__proto__ = faang;
// console.log("Engg :" , engineer)
// console.log(engineer.salary())

// Example 2

let faang2 = {
    name: "google" ,
    salary : function () {
        console.log("600K Salary");
    }
}

let engineer2 = Object.create(faang , {
    taskAssigned: {value:2}
})
console.log(engineer2.name)
