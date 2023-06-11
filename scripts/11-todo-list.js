  const todoList = [];

  function addTodo() {
    const inputElement = document.querySelector('.name-of-todo');
    const name = inputElement.value;
    // console.log(name);
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
  }