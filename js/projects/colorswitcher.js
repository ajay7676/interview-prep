

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) =>{
//   console.log(btn)
 btn.addEventListener("click" , (event) =>{
       console.log(event.target.id)
       switch (event.target.id) {
        case "grey":
              body.style.backgroundColor = event.target.id;
            break;
        case "white":
              body.style.backgroundColor = event.target.id;
            break;
        case "blue":
              body.style.backgroundColor = event.target.id;
            break;
        case "yellow":
              body.style.backgroundColor = event.target.id;
            break;
       
        default:
            break;
       }
 });
})


