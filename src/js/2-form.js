const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const saved = JSON.parse(localStorage.getItem(localStorageKey)) ?? '{}';
formData.email = saved.email ?? '';
formData.message = saved.message ?? '';
email.value = saved.email ?? '';
message.value = saved.message ?? '';

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields');
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
