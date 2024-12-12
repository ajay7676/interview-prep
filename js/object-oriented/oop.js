// Object Literal
const user = {
    username : "hitesh" ,
    loginCount : 8 ,
    signedIn : true,

    getUserDetail : function () {
        // console.log("Got User Details from Database");
        //  console.log(`Username : ${this.username}`)
        // console.log(this)
        
    }

}
// console.log(user.username)
// console.log(user.getUserDetail())
// console.log(this)



//CONSTRUCTOR 

function User(username , loginCount , isLoggedIn) {
    this.username = username , 
    this.loginCount = loginCount ,
    this.isLoggedIn = isLoggedIn ,

    this.greetingMsg = function (){
         console.log(`Greeting Msg : ${this.username}`)

    }

    // return this; here implicit return the value 
}


const userOne = new User("Ajay" , 8 , true);
const userTwo = new User("Chai aur Code" , 12 , false)
// console.log(userOne)
console.log(userOne.constructor)
// console.log(userOne.greetingMsg())
// console.log(userTwo)


//  new keyword
//  1. Create a New Object:
//  2. Set the Prototype:
//  3. Call the Constructor Function:
//  4 . Return the Object: