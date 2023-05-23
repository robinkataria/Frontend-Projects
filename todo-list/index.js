showTasks();

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  const taskInputBox = document.getElementById("taskInputBox");
  createTask(taskInputBox.value);
  saveData();
  taskInputBox.value = "";
});

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    const taskInputBox = document.getElementById("taskInputBox");
    createTask(taskInputBox.value);
    saveData();
    taskInputBox.value = "";
  }
});

const removeAllBtn = document.getElementById("removeAllBtn");
removeAllBtn.addEventListener("click", function () {
  const taskList = document.querySelector(".list-container");
  taskList.textContent = "";
  taskInputBox.value = "";
  saveData();
});

function createTask(task) {
  if (task == "") {
    return;
  }
  const li_task = document.createElement("li");
  li_task.innerText = task;
  li_task.classList.add("unit-task-container--task");

  const checkbox_markComplete = document.createElement("input");
  checkbox_markComplete.type = "checkbox";

  const button_deleteTask = document.createElement("button");
  button_deleteTask.innerText = "\u00d7";
  button_deleteTask.classList.add("unit-task-container--deletebtn");

  const taskContainer = document.createElement("div");
  taskContainer.appendChild(checkbox_markComplete);
  taskContainer.appendChild(li_task);
  taskContainer.appendChild(button_deleteTask);

  taskContainer.classList.add("unit-task-container");

  document.querySelector(".list-container").appendChild(taskContainer);
}

const listContainer = document.querySelector(".list-container");
listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    const checkbox = event.target.parentElement.children[0];
    checkbox.checked = checkbox.checked ? false : true;
    event.target.parentElement.classList.toggle("checked-bg");
  } else if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  } else if (event.target.tagName === "INPUT") {
    event.target.parentElement.children[1].classList.toggle("checked");
    event.target.parentElement.classList.toggle("checked-bg");
  }
  saveData();
});

listOfTasks = document.querySelector(".list-container");
function saveData() {
  localStorage.setItem("data", listOfTasks.innerHTML);
}

function showTasks() {
  listOfTasks.innerHTML = localStorage.getItem("data");
}
