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

refs.form.addEventListener('submit', onSubmit);
