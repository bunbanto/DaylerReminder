import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-api';

import refs from './refs';
import { createMarkup } from './markup-tasks';

export function onSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  console.log(taskName);

  if (taskName.value.trim() && taskDescription.value.trim()) {
    const taskData = {
      title: taskName.value.trim(),
      text: taskDescription.value.trim(),
    };

    const existingTasks = getDataFromLocalStorage('tasks') || [];
    const updatedTasks = [...existingTasks, taskData];

    addDataToLocalStorage('tasks', updatedTasks);

    refs.list.insertAdjacentHTML(
      'beforeend',
      createMarkup(taskData.title, taskData.text)
    );

    refs.form.reset();
  } else {
    return;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = getDataFromLocalStorage('tasks') || [];
  savedTasks.forEach((task, id) => {
    refs.list.insertAdjacentHTML(
      'beforeend',
      createMarkup(task.title, task.text, id)
    );
  });

  // Attach delete event listener
  refs.list.addEventListener('click', onDeleteTask);
});

function onDeleteTask(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    const taskIndex = Array.from(refs.list.children).indexOf(taskItem);

    // Remove task from local storage
    const tasks = getDataFromLocalStorage('tasks') || [];
    tasks.splice(taskIndex, 1);
    addDataToLocalStorage('tasks', tasks);

    // Remove task from DOM
    taskItem.remove();

    // Re-render the list
    refs.list.innerHTML = '';
    const updatedTasks = getDataFromLocalStorage('tasks') || [];
    updatedTasks.forEach((task, id) => {
      refs.list.insertAdjacentHTML(
        'beforeend',
        createMarkup(task.title, task.text, id)
      );
    });
  }
}
