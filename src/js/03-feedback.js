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
  if (e.target.name === 'email') {
    storage.email = currentEl.value;
  } else if (e.target.name === 'message') {
    storage.message = currentEl.value;
  }

  VALUE = JSON.stringify(storage);
  localStorage.setItem(KEY, VALUE);
}
