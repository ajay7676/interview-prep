// const doSomethingFunc = (n) =>{
//     if (n === 0) {
//         console.log("Task Completed")
//         return;
//     }
//     console.log("I am doing something")
//     doSomethingFunc(n-1);
// }
// doSomethingFunc(3);

// Find the factorial of 5  
// 

const factorialNum = (num) =>{

  let factorail = 1;
  for(i= num; i > 0 ; i--){
       factorail*= i;
  }

   return  factorail;
      
}
  // console.log( factorialNum(5))




//   const recfactorialNum = (num) =>{
//          if(num === 1) return 1;
//          let factorail = num* recfactorialNum(num -1);
//          return factorail
//   }

//  console.log(recfactorialNum(5));