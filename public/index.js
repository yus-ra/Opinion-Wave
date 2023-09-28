const newFormButton = document.getElementById('newFormButton');
const formPanel = document.getElementById('formPanel');
const createFormForm = document.getElementById('createFormForm');
const formsList = document.getElementById('formsList');

newFormButton.addEventListener('click', () => {
  formPanel.style.display = 'block';
});

createFormForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formTitle = document.getElementById('formTitle').value;
  addFormToList(formTitle);
  formPanel.style.display = 'none';
});

function addFormToList(formTitle) {
  const listItem = document.createElement('li');
  listItem.textContent = formTitle;
  formsList.appendChild(listItem);
}

