

const myDate = new Date();

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// let mycretateDate = new Date(2025, 3, 13)

// console.log(mycretateDate2.toLocaleDateString());

let mycretateDate2 = new Date("01-13-2025")

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(mycretateDate2.getTime());
// 
let newDate  = new Date();
//  console.log(newDate.getDate());
//  console.log(newDate.getMonth() + 1);
//  console.log(newDate.getDay());

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
}))
