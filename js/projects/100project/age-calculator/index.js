const birthday = document.getElementById("birthday")
const calclulateBtn = document.getElementById("btn")


calclulateBtn.addEventListener("click" , () =>{
     const dobValue = birthday.value;
     if(!dobValue) return alert("Please enter the vaild DOB");
     const dob = new Date(dobValue);
     const today = new Date();
 
     let age = today.getFullYear() - dob.getFullYear();
     const m = today.getMonth() - dob.getMonth();
 
     // Agar birthday abhi nahi aaya iss saal mein toh 1 saal kam kar do
     if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
       age--;
     }
 
     document.getElementById("result").innerText = `Your age is ${age} years.`;

})