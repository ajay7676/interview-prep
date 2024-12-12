const form = document.getElementById('itemForm');
const input = document.querySelector('#itemInput');
const ul = document.querySelector('.list');
const ulCompleted = document.querySelector('.completedItems');
const btnClearToDo = document.querySelector('#clearToDo');
const btnClearCompleted = document.querySelector('#clearCompleted');

 const createLi = (text) =>{
    const li = document.createElement('li');
	const span = document.createElement('span');
    span.textContent = text;
	li.appendChild(span);
    const spanInteract  = document.createElement('span');
    spanInteract.className = "spanInteract"
    const label = document.createElement('label');
    label.textContent = "Completed";
    label.className = "completedLabel";
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "toggleCheckbox"
    // checkbox.name = "move-item"
    const checkboxID = checkbox
    console.log("ADF",checkboxID)
    checkboxID.addEventListener("change", (e) => {
        e.preventDefault();
        console.log(e)
        if (checkboxID.checked) {
            // text.style.display = "block"; // Show the text
            console.log("Check Checked")
        } else {
            // text.style.display = "none"; // Hide the text
            console.log("Check  Not Checked")
        }
    });
    label.appendChild(checkbox)
    spanInteract.appendChild(label)
    const EditBtn = document.createElement('button');
    EditBtn.textContent = "Edit";
    spanInteract.appendChild(EditBtn);
    li.appendChild(spanInteract);
    return li;
 }
//Form to add item to 'to do' lsit
form.addEventListener('submit' , (e) =>{
    e.preventDefault();
	const text = input.value;
    if (text !== "") {
        var li = createLi(text);
	    ul.appendChild(li);
        input.value = '';

    }else{
        alert("Please write your todo")
    }
	
})

//move li item to completed list when checkbox selected
ul.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(e)
	const checkbox = e.target;
	const checked = checkbox.checked;
	const listItem = e.target.parentNode.parentNode.parentNode;
    console.log(listItem)
	// const listItem = e.target.parentNode.parentNode;
	const completedItems = document.querySelector('.completedItems');
    console.log(completedItems)
	const label = listItem.querySelector('.completedLabel');
	const spanInteract = listItem.querySelector('.spanInteract');
	// if (checked) {
	// 	completedItems.appendChild(listItem);
	// 	// label.style.display = 'none';
	// 	spanInteract.style.display = 'none';
	// }
});

//Edit button functionality

ul.addEventListener('click' , (e) =>{
    e.preventDefault();
    const button = e.target;
    const li = button.parentNode.parentNode;
    const ul = li.parentNode;
    if (e.target.tagName === 'BUTTON') {
        if(e.target.textContent === "Edit"){
            const span = li.firstElementChild;
            const input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;
            li.insertBefore(input, span);
			li.removeChild(span);
            button.textContent ="Save"
        }
        else if(e.target.textContent === "Save"){
            const input = li.firstElementChild;
			const span = document.createElement('span');
			span.textContent = input.value;
			li.insertBefore(span, input);
			li.removeChild(input);
			button.textContent = 'Edit';
        }
    }
})

