// let output = "";
// let currCalc = "";
// let current = "";

// function Calculate(current, output, currCalc) {
//   let total = 0;
//   console.log(current + " " + parseInt(output) + " " + currCalc);
//   if (currCalc === "/") {
//     total = current / parseInt(output);
//   } else if (currCalc === "*") {
//     total = current * parseInt(output);
//   } else if (currCalc === "-") {
//     total = current - parseInt(output);
//   } else if (currCalc === "+") {
//     total = current + parseInt(output);
//   } else {
//   }
//   current = total;
//   return total;
// }

// document.querySelector(".input").addEventListener("click", function (event) {
//   let input = event.target.innerText;

//   if (document.querySelector(".output").innerText === "0") {
//     output = "";
//   }

//   if (!input) {
//   } else if (input === "C") {
//     output = "0";
//     current = "";
//   } else if (input === "←") {
//     console.log(output);
//     output = output.slice(0, output.length - 1);
//     console.log(output);
//   } else if (input === "÷") {
//     if (currCalc != "") {
//       output = Calculate(current, parseInt(output), currCalc);
//     }
//     current = parseInt(output);
//     currCalc = "/";
//     output = "0";
//   } else if (input == "×") {
//     if (currCalc) {
//       output = Calculate(current, parseInt(output), currCalc);
//     }
//     current = parseInt(output);
//     currCalc = "*";
//     output = "0";
//   } else if (input === "-") {
//     if (currCalc) {
//       output = Calculate(current, parseInt(output), currCalc);
//     }
//     current = parseInt(output);
//     currCalc = "-";
//     output = "0";
//   } else if (input === "+") {
//     if (currCalc) {
//       output = Calculate(current, parseInt(output), currCalc);
//     }
//     current = parseInt(output);
//     currCalc = "+";
//     output = "0";
//   } else if (input === "=") {
//     output = Calculate(current, parseInt(output), currCalc);
//     currCalc = "";
//   } else {
//     output += input;
//   }
//   document.querySelector(".output").innerText = output;
// });