export function createMarkup(title, text, id) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${text}</p>
  </li>`;
}
