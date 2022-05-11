const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

//Get items list by id
let items = document.getElementById('items');

//Create a function addTaskToList to append task to the list
const addTaskToList = function (task) {
  //creating a new <li> for new task
  let li = document.createElement('li');
  //adding "list-group-item" class to the <li>
  li.classList.add('list-group-item');
  console.log('new task',li);
  console.log("------------------------------------------------");
  li.innerHTML = `<span class="task-text"></span>
  <input type="text" class="task-input">
  <i class="uil uil-edit icon icon-edit"></i>
  <i class="uil uil-trash-alt icon icon-delete"></i>`;
  console.log('new task HTML',li);
  console.log("------------------------------------------------");
  //assign task text in the span
  li.children[0].textContent = task;
  //add new task to the bottom of the list
  console.log(items);
  console.log("------------------------------------------------");
  items.appendChild(li);
  console.log(items);
  console.log("------------------------------------------------");
};

// Load tasks using loop and calling function addTaskToList
for (let task of tasks) {
  addTaskToList(task);
}

//Get submit button by id
const submitBtn = document.getElementById('submit');

// Add event listener on submit button to add new tasks by clicking it
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let task = document.getElementById('new-task-input');
  if (!task.value) return;
  addTaskToList(task.value);
  console.log('before', task.value);
  task.value = '';
  console.log('after', task.value);
});

//Add event listener to task list
//Check if icon delete or icon edit was clicked
//If icon delete clicked, remove parent element
//If icon edit clicked, hide span, show input and add span text to input
//For edit icon, add event listener to press enter key, to update and show span text and hide input
items.addEventListener('click', function (el) {
  if (el.target.classList.contains('icon-delete')) {
    el.target.parentElement.remove();
  } else if (el.target.classList.contains('icon-edit')) {
    // console.dir(el.target);
    const input = el.target.previousElementSibling;
    const span = input.previousElementSibling;
    span.style.display = 'none';
    input.value = span.textContent;
    input.style.display = 'block';
    input.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        span.textContent = input.value;
        input.style.display = 'none';
        span.style.display = 'block';
      }
    });
  }
});
