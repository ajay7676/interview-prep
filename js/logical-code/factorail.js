// console.log("Factorial ");


function findFactorial(num) {

    let factorail= 1
    if(Math.sign(num) !== 1) {
        throw new Error("Please Enter Positive NUmber");
    }else{
        for(let i = num ;  i >= 1; i--){
            factorail *= i;
       }
    }
   
    return factorail
    
}

console.log(findFactorial(5));

