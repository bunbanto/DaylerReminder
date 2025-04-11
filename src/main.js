// import {
//   getDataFromLocalStorage,
//   addDataToLocalStorage,
// } from './js/local-storage-api';

import refs from './js/refs';
import { startPage, onClick } from './js/theme-switcher';
import { onSubmit } from './js/tasks';

document.addEventListener('DOMContentLoaded', startPage);
// document.addEventListener('DOMContentLoaded', startTask);
refs.btnToggle.addEventListener('click', onClick);
/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.
*/
refs.form.addEventListener('submit', onSubmit);
