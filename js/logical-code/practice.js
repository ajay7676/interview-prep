// console.log("Practice 1")

// console.log("Hello World")

// 2.
// Write a that takes two numbers as input & print their sum
// Input: Two numbers a & b
// Sum = a+b
// Print the sum on the console

function sum(a,b) {
    return a+b;
    
}

// console.log(`Sum is two number: ${sum(-1.6,-1.78)}`);


/**
 * Problem statement -3 
 * Write a function that calculates & prints the area of a reactangle given its lenght & width
 * Input lenght & width

 */

 const areaOfTriangle = (l,h) =>{
    if (l <= 0) {
        throw new Error("Length shold be a positive number");
        
    }
    if(h <= 0){
        throw new Error("Width should be a positive number");
        
    }
    return l*h;
 }

 console.log(areaOfTriangle(4,-5))

