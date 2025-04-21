//  const categories = document.getElementById("cateogies");

//  categories.addEventListener("click" , (e) =>{
//      console.log(e.target.id);
//      if(e.target.tagName == "LI"){
//         window.location.href ="/" +e.target.id;
//      }
    
//     })

// console.log(3+2+ "7")

// const str ="hello my name is ajay";
// let singleline=""
// let result ="";
// for (let i =0 ; i <str.length ; i++){
//     console.log(str[i])
//     if(str[i] === " "){
//           result += singleline + '\n';
//           singleline = ""
//     }else{
//         singleline += str[i] 
//     }
// }

// result += singleline;
                                                       
// console.log(result)


// function test() {
//     salary = 1200

//     console.log(salary)
// }

// test()
// console.log("Iutside",salary)


// function abc(){

//     console.log(abc.xyz)

// }
// abc();
// abc.xyz = 400;
// abc.xyz = 600;
// abc()


// console.log({} == {})
// console.log({} === {})

let a = {
     name : "Himanshu"
}

let b = {
     ...a
}
 b.name="raja"

 console.log(a.name); //Himashu