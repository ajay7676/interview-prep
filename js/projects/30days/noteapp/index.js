const createbtn  = document.getElementById("create-btn");
const notesContainer = document.getElementById("notes-container")
const editContainer = document.querySelector(".input-box")
console.log("notes" , notesContainer.innerHTML)

 function  showNotes() {
   notesContainer.innerHTML = localStorage.getItem("nodes");
   
 }

function storeInLocalStoreage() {
     localStorage.setItem("nodes" , notesContainer.innerHTML );
}

createbtn.addEventListener("click" , () =>{
     let inputBox = document.createElement("p");
     let img = document.createElement("img");
     inputBox.className ="input-box";
     inputBox.setAttribute("contenteditable" , "true");
    //  inputBox.focus();
     img.src="delete.png"
     notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click" , (e) =>{
     if (e.target.tagName === "IMG") {
         e.target.parentElement.remove();
         storeInLocalStoreage()  
     }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = () =>{
                storeInLocalStoreage() ;
            }
            
        });

     }
})

showNotes();

document.addEventListener("keydown" , (e) =>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();

    }

})
