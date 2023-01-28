const form = document.querySelector('.feedback-form');

form.addEventListener('input', current);

const storage = {
  email: '',
  message: '',
};
let KEY = 'feedback-form-state';
let VALUE = '';

function current(e) {
  const currentEl = e.target;
  console.log(e.target.value);
  storage.email = currentEl.name;
  storage.message = currentEl.value;
  VALUE = JSON.stringify(storage);
  localStorage.setItem(KEY, VALUE);
}
