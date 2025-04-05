

// 1. Promise

const promiseOne = new Promise(function (resolve,reject)  {
    // Do an async Task 
    // DB Calls, cryptography , network
    setTimeout(function (reslove,reject) {
        // console.log("Async task is complete");
        resolve();
    },1000)
    
});

promiseOne.then(function(){
    // console.log("Promise Consume")
})

/**
 * Async task is complete
 * Promise Consume
 */

new Promise(function (reslove, reject) {

   setTimeout(function(resolve,reject){
    //  console.log("Async Task TWo")
     reslove();
   },1000)
}).then(function(){
    // console.log("Async 2 resloved")
})
/**
 * Async Task TWo
 * Async 2 resloved
 */

promeThree = new Promise(function (reslove,reject) {
    setTimeout(function () {
        reslove({username : "chai" , email: "chai@example.com"})
        
    }, 1000)
    
})

promeThree.then(function (user) {
    // console.log(user)
    
})

promiseFour = new Promise (function(reslove,reject){

    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: "ajay" , password: "12345"})
        }
        else{
            reject('Error : Someting wenrt wrong')
        }

    },1000)
    
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;

}).then((myusername)=>{
    console.log(myusername)

}).catch((error)=>{
    // console.log(error)

}).finally(()=>{
    // console.log("The Primse is either resloved or rejected")
})



promiseFive = new Promise((reslove,reject) =>{
           setTimeout(() =>{
            let error = false
            if (!error) {
                reslove({username: "javascript" , password: "asdf1@3$"})
            }
            else{
                reject('JS Went Wrong')
            }
           },2000)
})

consumePromiseFive = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response)
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }
}

// consumePromiseFive();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((error) =>{
    console.log(error)
})