import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input[name=email]');
const textArea = document.querySelector('.feedback-form textarea[name=message]');

form.addEventListener('input', throttle(currentOnForm, 500));
form.addEventListener('submit', onSubmitForm);

const storage = {};

let KEY = 'feedback-form-state';

function currentOnForm(e) {
  const keyStorage = e.target.name;
  storage[keyStorage] = e.target.value;

  localStorage.setItem(KEY, JSON.stringify(storage));
}

function setCurrentState(key) {
  const parseStorage = JSON.parse(localStorage.getItem(key));
  if (parseStorage) {
    if (
      parseStorage.email === undefined ||
      parseStorage.message === undefined ||
      parseStorage.email.trim() === '' ||
      parseStorage.message.trim() === ''
    ) {
      alert('Заповніть усі поля форми');
      return;
    }
    email.value = parseStorage.email;
    textArea.value = parseStorage.message;
  }
}

function onSubmitForm(e) {
  console.log();
  if (
    storage.email === undefined ||
    storage.message === undefined ||
    storage.email.trim() === '' ||
    storage.message.trim() === ''
  ) {
    alert('Для відправки форми усі поля мають бути заповнені');
    return;
  }
  e.preventDefault();
  form.reset();
  localStorage.removeItem(KEY);
  console.log(storage);
}

setCurrentState(KEY);
