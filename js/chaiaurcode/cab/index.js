/**
 * call : Call immediatly invoked function with specific  this .
  Apply : same as call but arguments are passed as an  array.
  Bind : Return a new function when called . this value set to provide value
 */


  const person = {
    name : "Alice",
    age: 25,
  };

  const introduce = (interst , hobby) =>{
    console.log(`My name is ${this.name} and I am ${this.age} old. I like ${interst}  & ${hobby}`)

  }

//   introduce.call(person, "math" , "chess"); // My name is  and I am undefined old. I like math  & chess

//   introduce.apply(person , ["playing cricket" , "making food"]); // My name is  and I am undefined old. I like playing cricket  & making food

   const bindIntroduce = introduce.bind(person,'liteture');
  bindIntroduce('ajay')
   bindIntroduce();

