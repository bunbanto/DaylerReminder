import refs from './refs';
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-api';

refs.button.addEventListener('click', () => {
  if (refs.body.classList.contains('theme-dark')) {
    refs.body.classList.replace('theme-dark', 'theme-light');
    addDataToLocalStorage('theme', 'theme-light');
  } else {
    refs.body.classList.replace('theme-light', 'theme-dark');
    addDataToLocalStorage('theme', 'theme-dark');
  }
});
export function startPage() {
  const savedTheme = getDataFromLocalStorage('theme');

  if (savedTheme === 'theme-dark') {
    refs.body.classList.replace('theme-light', 'theme-dark');
  } else {
    refs.body.classList.replace('theme-dark', 'theme-light');
  }
}

//startPage();
