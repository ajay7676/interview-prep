/**
 * Problem 1-
 * Write a  function that tells if a given nummber is even or odd
 * Input : A number
 * Return: "even" if the number is even, "odd" if the number is odd
 */


function checkEvenOdd(num) {
    if(num%2 === 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }

}

// checkEvenOdd(18);

// Using Switch Stateement

const checkOddEven = (num) =>{
    switch (num % 2) {
        case 0:
            console.log("Even")
            break;
        case 1:
            console.log("Odd")
            break;
        default:
            console.log("Invalid Input")
            break;
    }
    
}

// checkOddEven(-1)

/**
 * Problem - 2 
 * 
 * Write a  function that finds & prints the smallest number among three given numbers.
 * Input: 3 numbers
 * Return: Smallest number
 * Example
 * 3,1,6 > 1
 * -1 ,-6,9  > -6
 * Math.min is not allowed
*/

   const smallestNum = (num1,num2,num3) =>{
//     let smallest= num1;
//     if (num1 < num2) {
//         smallest = num2
//     }else if(num)
      
//    }
   }

   smallestNum(3,1,6)