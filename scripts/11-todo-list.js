  const todoList = ['make dishes', 'laundry'];

  renderTodoList();

  function renderTodoList() {
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      const htmlTodo = `<p>${todo}</p>`
      todoListHTML += htmlTodo;
    }
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  function addTodo() {
    const inputElement = document.querySelector('.name-of-todo');
    const name = inputElement.value;
  
    todoList.push(name);


    console.log(todoList);
    inputElement.value = '';

    renderTodoList();
  }