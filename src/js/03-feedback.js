const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input[name=email]');
const textArea = document.querySelector(
  '.feedback-form textarea[name=message]'
);

form.addEventListener('input', current);

const storage = {
  email: '',
  message: '',
};
let KEY = 'feedback-form-state';
let VALUE = '';

function current(e) {
  const currentEl = e.target;
  if (e.target.name === 'email') {
    storage.email = currentEl.value;
  } else if (e.target.name === 'message') {
    storage.message = currentEl.value;
  }
  VALUE = JSON.stringify(storage);
  localStorage.setItem(KEY, VALUE);
}

function setCurrentState(key) {
  const parseStorage = JSON.parse(localStorage.getItem(key));
  console.log(email.value);
  console.log(textArea.value);
  email.value = storage.email;
  textArea.value = storage.message;
}
setCurrentState(KEY);
