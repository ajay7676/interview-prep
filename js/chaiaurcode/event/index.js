const one = () =>{
    console.log("first")
}
const two = () =>{
    setTimeout(() => {
        console.log("Second")
    }, 0);
}

const three = () =>{
    console.log("Third")
}


two();
one();
three();
/**
 * Output
 * first
 * thrid
 * Second
 */