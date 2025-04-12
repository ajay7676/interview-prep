
// let a = 10;
// console.log(a)
// var b = 20;
// console.log(a)
// const a =20;

// // SCOPE IN JAVASCRIPT 
// {
//     var a =10;
//     let b=20;
//     const c =30;
// }


// SHADOWING IN JAVASCRIPT

let c =100;
{
    var b= 20;
    let c= 15;
    const d=30;  
    console.log(b);
    console.log(c);
    console.log(d)

}
console.log(c)