const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.name.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const saved = JSON.parse(localStorage.getItem(localStorageKey) ?? {});
formData.email = saved.email ?? '';
formData.message = saved.message ?? '';

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);

  formData = {
    email: '',
    message: '',
  };
});
