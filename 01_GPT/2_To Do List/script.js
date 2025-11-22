function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    var taskContainer = document.getElementById('tasksContainer');

    var taskElement = document.createElement('div');
    taskElement.classList.add('task');

    var label = document.createElement('label');
    label.textContent = taskText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskElement.remove();
    };

    taskElement.appendChild(label);
    taskElement.appendChild(deleteButton);

    taskContainer.appendChild(taskElement);

    taskInput.value = '';
}
