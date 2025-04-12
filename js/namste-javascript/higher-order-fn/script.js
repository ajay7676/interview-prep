const radius = [3,1,2,4];

// const calculateArea = function (radius) {
//     let output = [];

//     for(i = 0; i< radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;



    
// }

// console.log(calculateArea(radius))

// const calculateArea = (radius) =>{
//     let output = [];
//     for(i = 0; i< radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;
      
// }
// console.log(calculateArea([1,2,1])) //(3) [3.141592653589793, 12.566370614359172, 3.141592653589793]


const rad=[1,2,1];

const area = (rad) =>{
    return Math.PI*rad*rad;
}
const circumference  = (rad) =>{
    return 2*Math.PI*rad;
}
const diameter  = (rad) =>{
    return 2*rad;
}

const calculate = (rad , logic) =>{
    let output = [];
    for(i = 0; i< rad.length; i++){
        output.push(logic(rad[i]));
    }
    return output;
}

console.log(calculate(rad,area));// [3.141592653589793, 12.566370614359172, 3.141592653589793]
console.log(calculate(rad,circumference));// [6.283185307179586, 12.566370614359172, 6.283185307179586]
console.log(calculate(rad,diameter));// [2, 4, 2]


