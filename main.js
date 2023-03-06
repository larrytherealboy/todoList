// 初始變數
const list = document.querySelector("#item-list");
const todoList = document.querySelector("#my-todo");
const doneList = document.querySelector("#my-done");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  todoList.appendChild(newItem);
}

// 函式：增加Todo清單
function addTodo() {
  const inputValue = input.value;

  // 新增機制：防止產生空白 todo
  if (inputValue.length > 0 && inputValue.trim() != "") {
    addItem(inputValue);
  }
}

// 設置事件：點擊Add，增加Todo清單
addBtn.addEventListener("click", addTodo);

// 設置事件：點擊enter，增加Todo清單
input.addEventListener("keyup", function () {
  if (event.key === "Enter") {
    return addTodo();
  }
});

// 設置事件：刪除Todo，並下放置Done清單
list.addEventListener("click", function (event) {
  const target = event.target;
  console.log(target);

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    let myDone = target.parentElement;
    doneList.appendChild(myDone);
    console.log(doneList);
  }
});
