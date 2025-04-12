// setTimeout(() => {
//     console.log("Set Timout");
// }, 5000);

// function x(y) {
//     console.log("x")
//     y();
    
// }
// x(function y() {
//     console.log("y")
// })

// OutPut 
// x 
// y
// after 5 sec: Set Timeout
function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click" , function xyzx(){  
    console.log("Button Clicked" , ++count)
        
    })
}

attachEventListener();
