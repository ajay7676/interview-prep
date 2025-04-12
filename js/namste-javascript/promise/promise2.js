
const promise = createCart();
console.log(promise)

promise.then(function (orderId) {
    console.log(orderId)
    return orderId;
})
.then( function (orderId) {
    return proccedToPayment(orderId)
    
})
.then(function (paymentInfo) {
    console.log(paymentInfo)
    
})
.catch(function (err) {
     console.log("Error" ,err)
})
function createCart() {
    const pr = new Promise(function (resolve,reject) { // this is way create promise 
           if (!validateCart()) {
             const err = new Error("Cart is not valid");
            reject(err.message)
           }
           const orderId = 12345;
           if(orderId){
              setTimeout(() => {
                resolve(orderId)
              }, 5000);
           }

    });
    return pr;
}

function proccedToPayment(orderId) {
     return new Promise(function (resolve,reject) {
            resolve("Payment Successful")
        
     })
    
} 

function validateCart() {

    return true
    
}
