const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const calculatebtn = document.getElementById("calculate");
const totalAmmount = document.getElementById("total")

calculatebtn.addEventListener('click' , (e)=>{
    const billValue =bill.value;
    const tipValue =tip.value;
    let totalAmm = billValue*(1+tipValue/100);
    totalAmmount.innerHTML= totalAmm
})