let  inputDate = document.getElementById("date-input");
const  calculateBtn = document.getElementById("calculate-btn");
const  showAge = document.querySelector("show-calculate-age");

inputDate.max = new Date().toISOString().split("T")[0];

// inputDate.addEventListener('change',  () =>{
//     let selectDateBirth = inputDate.value;
//     console.log(selectDateBirth);
//     const currentDate = new Date();
//     console.log(" dd" , currentDate)

// })
calculateBtn.addEventListener("click" , () =>{
    let birthDate = new Date(inputDate.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1 ;
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();
     let d2= todayDate.getDate();
    let m2=  todayDate.getMonth() + 1 ;
    let y2=  todayDate.getFullYear();

    let age = todayDate.getFullYear() - birthDate.getFullYear();
    const m = todayDate.getMonth() - birthDate.getMonth();
    const d = todayDate.getDate() - birthDate.getMonth();
    console.log(`${m} " " ${age} `)
    if (m < 0 || (m === 0 && d < birthDate.getDate())) {
        age--;
      }
    
    let showDatefBirth = document.createElement("p");
      showDatefBirth.innerHTML = `You age is ${age}`;
      console.log("showDatefBirth" , showDatefBirth)
      showAge.appendChild(showDatefBirth)
      return age;

        
})