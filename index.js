const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

//Get items list by id
const tasksList = document.getElementById("items");

//Create a function addTaskToList to append task to the list
function addTaskToList(task){
    const li = document.createElement("li");
    //<li></li>
    li.className = "list-group-item";
    //li.classList.add("className")
    //<li class="list-group-item"></li>
    li.innerHTML = `<span class="task-text"></span>
    <input type="text" class="task-input">
    <i class="uil uil-edit icon icon-edit"></i>
    <i class="uil uil-trash-alt icon icon-delete"></i>`;
    li.children[0].textContent = task;
        /*
        <li class="list-group-item">
            <span class="task-text">Task 1</span>
            <input type="text" class="task-input">
            <i class="uil uil-edit icon icon-edit"></i>
            <i class="uil uil-trash-alt icon icon-delete"></i>
        </li>
    */
    tasksList.appendChild(li);
}

// Load tasks using loop and calling function addTaskToList
// addTaskToList(tasks[0]);
// addTaskToList(tasks[1]);
// addTaskToList(tasks[2]);
// addTaskToList(tasks[3]);
for(let i = 0;i < tasks.length;i++){
    addTaskToList(tasks[i]); 
}


//Get submit button by id
const submitBtn = document.getElementById("submit");

// Add event listener on submit button to add new tasks by clicking it
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let input = document.getElementById("new-text-input");
    addTaskToList(input.value);
})

//Add event listener to task list
//Check if icon delete or icon edit was clicked
//If icon delete clicked, remove parent element
//If icon edit clicked, hide span, show input and add span text to input
//For edit icon, add event listener to press enter key, to update and show span text and hide input
tasksList.addEventListener("click", function(event) {
    console.dir(event.target);
    if(event.target.classList.contains("icon-delete")){
        event.target.parentElement.remove();
    } else if(event.target.classList.contains("icon-edit")){
        console.dir(event.target);
        let input = event.target.previousElementSibling;
        let span = input.previousElementSibling;
        // const li = event.target.parentElement;
        // input = li.children[1];
        // span = li.children[0];
        input.style.display = "block";
        span.style.display = "none";
        input.value = span.textContent;
        input.addEventListener("keypress", function(event){
            // console.log("key pressed");
            if(event.keyCode === 13){
                span.textContent = input.value;
                input.style.display = "none";
                span.style.display = "block";
            }
        })


    }
})