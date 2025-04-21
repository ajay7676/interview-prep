
const person = {
    firstName : "Ajay",
    lastName  : "Chauhan",
    fullName :  function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

const person2 = {
    firstName : "MS",
    lastName  : "Dhoni",
}


 person.fullName();
//  person2.fullName();