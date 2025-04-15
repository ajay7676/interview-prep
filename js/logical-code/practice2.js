/**
 *  Write a  function that tells of a givien number is even or odd
 * Input : A number
 * Outpout : "even" if the number even , "odd" if the number odd ,
 */

// function checkEvenOdd(num) {
//     if(num%2 === 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
    
// }

// checkEvenOdd (-17)
// function checkEvenOdd2(num) {
//     return num%2 === 0 ? "even" : "odd"
    
// }

// console.log(checkEvenOdd2(-13))


/**
 * Writa a function that  finds & prints the smallest number among three given numbers.
 * Input: 3 numbers
 * Return: Smallest Number
 */

//  function findSmallestNum(a,b,c) {
    
//      if ( a < b && b < c) {
//         return `a : ${a}`;
//      }
//      else if (b < a && a < c) {
//         return `b : ${b}`;
        
//      } else if(c < a && a < b) {
//         return `c : ${c}`;
        
//      }   
     
//      return a,b,c;

//  }

// console.log( findSmallestNum(6,2,3))

function findSmallestThree(a,b,c) {
    let smallestNum = a ;
    if( b < smallestNum){
         smallestNum = b;
    }else if( c < smallestNum){
         smallestNum = c;
    }
    return smallestNum;
    
    
}
console.log(findSmallestThree(6,1,5));
