// To Do 
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const tasksList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask(input.value);
  input.value = '';
});

function addTask(taskText) {
  const taskElement = document.createElement('li');
  const taskTextElement = document.createElement('span');

  taskTextElement.textContent = taskText;

  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.textContent = 'Delete';
  deleteButtonElement.classList.add('delete-btn');

  taskElement.append(taskTextElement);
  taskElement.append(deleteButtonElement);
  tasksList.append(taskElement);

  deleteButtonElement.addEventListener('click', () => {
    taskElement.remove();
  });

  taskTextElement.addEventListener('click', () => {
    taskTextElement.classList.toggle('completed');
  });
};