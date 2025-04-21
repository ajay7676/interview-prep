function curriedAdd(a){
    return function (b){
        return a+b;
    }
}
  const sum = curriedAdd(3)(5);
//    console.log(sum);

// function curriedMultiply (a) {
//     return function(b){
//         return function (c){
//             return a*b*c;
//         }
//     }
    
// }
// const multiply =  curriedMultiply(2)(3)(5);

// console.log(multiply)
 
function calculateDiscount(discount){
    return function (price){
        return price * discount;
    }

}


// const discount =  calculateDiscount(0.1)(1000)
const discount =  calculateDiscount(0.11)(2000)
//  console.log(discount)

// Modern ES6 Syntax:

   const arrwMultiply = a => b => a*b;

   const arrowmulti =  arrwMultiply(2);
//    console.log(arrowmulti(10))
//    console.log(arrowmulti(25))


const arrowSum = a => b => a+b
// console.log(arrowSum(3)(5))

const arosum = arrowSum(7);
// console.log(arosum(8));


// Curring function using bind method

let multiply = function (x ,y){
    console.log(x*y);
}

let MultiplyByTwo = multiply.bind(this,2)
//   
let MultiplyByThree = multiply.bind(this , 3)
// MultiplyByThree(8); 


// Curring function using  function closure method


 function multiplyFun (x){
    return function(y){
        return x*y
    }
}

console.log(multiplyFun(4)(8))