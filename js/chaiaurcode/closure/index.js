// console.log("Closure")

// function outer(x){

//     return  function inner(y) {

//         return x+y;
//     }

// }
const getValue =() =>{

    let x=10;
    return () =>{
        return ++x;
    }
}

const value = getValue()
const chai = getValue()

// console.log(value()); // 11
// console.log(chai()) //   11

// console.log(value())// 12
// console.log(value()) //13




const  loadBalance = () =>{
    let userBalance = 100;
    const addBalance = () =>{
        let newValue = ++userBalance
        return newValue;
    }
    return {addBalance};
}

const  result = loadBalance();
/**
 * console.log(result.addBalance()); // 101
 *  console.log(loadBalance().addBalance()); // 101
 */