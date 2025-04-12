// function x() {
//     let a= 7;
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// x();

function x() {
       var a=7;
       function y() {
        console.log(a)
       }
       return y;
}
var z= x();
console.log(z)
// ƒ y() {
//     console.log(a)
//    }

z(); // 7