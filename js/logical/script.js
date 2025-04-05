/**
 * Questions  1 . Giveen a string , reberse each word in the sentence
 */

let str="Hello World";

let strSplit = str.split(" ").map((word) => word.split("").reverse().join(""))

//   console.log(strSplit.join(" ")); // olleH dlroW


  
/**
 * 2 - How to check if an object is an array or not ?
 */

//   let arr = [1,2,3,5]


function checkArray(elem) {

  return Array.isArray(elem);
    
}
// console.log(checkArray([])); // true
// console.log(checkArray({})); // false

/**
 * Question -3 
 * How to empty an array in Javascript?
 * do not reset it to a new array , and do nit loop at through to op each value
 */

 var emptArray = [1,2,3,4,5];
  emptArray.length = 0;
//  console.log(emptArray); // []

/**
 * Question - 4 
 * How would you check if  a number is an integer.?
 */

 var numInt = 11.20;

  if (numInt % 1 === 0) {
    // console.log("interger")
  }
  else{
//   console.log("Integer not !")
  }

/**
 *  Question -5  make this work
 *  duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
 */

function duplicate(arr) {

    return arr.concat(arr);
    
}

// console.log(duplicate([1,2,3,4,5]));

/**
 *  Write a Javascript function that reverse a number
 */



function reverseNumber(numbers) {
    
 return Number(numbers.toString().split('').reverse().join(''));
}

// console.log(reverseNumber(12));  // 21