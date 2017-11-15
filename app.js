function onReady() {
  //declare id variable
  let id = 0;

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      //add third id property to store value of id variable
      id: id
    });
    //increment the id variable
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function removal(id) {
    toDos = toDos.filter(function(todo) {
        return id !== todo.id;
    });
      renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';



    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      //create delete button
      const deleteButton = document.createElement('button');

      checkbox.type = "checkbox";
      deleteButton.type = "button";

      newLi.textContent = toDo.title;
      deleteButton.textContent = 'Delete';

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      //append deleteButton to newLi
      newLi.appendChild(deleteButton);




      //register an EventListener for the deleteButton
      deleteButton.addEventListener("click", () => {
        removal(toDo.id);
      });
    });
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
}
