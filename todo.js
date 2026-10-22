let todoList = document.querySelector('.todo-list');
let addTaskButton = document.querySelector('#addTask');


addTaskButton.addEventListener('click', function() {
    let newTask = document.createElement('li');
    newTask.textContent = 'New Task';
    todoList.append(newTask);

    
const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener
    ('click', function() {
        newTask.remove();
    });
    newTask.append(deleteButton);
    
  
 const completeButton = document.createElement('button');
    completeButton.textContent = 'incomplete';
    completeButton.addEventListener('click', function() {
        newTask.style.textDecoration = 'line-through';

        completeButton.textContent = 'complete';
    });
    newTask.append(completeButton);




});






