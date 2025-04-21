document.querySelector("#grandParent").addEventListener("click" , (e)=>{
    console.log("Grant parent Click")
},true)
document.querySelector("#parent").addEventListener("click" , (e)=>{
    console.log("Parent Click");
    e.stopPropagation();


},true)
document.querySelector("#child").addEventListener("click" , (e)=>{
    console.log("Child Click")
},true)