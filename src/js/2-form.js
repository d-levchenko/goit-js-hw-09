const form = document.querySelector('.feedback-form');
const inputField = document.querySelectorAll('.feedback-input');
const commentField = document.querySelector('.feedback-comment');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', evt => {
  const formData = {
    email: form.elements.email.value,
    comment: commentField.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const saved = JSON.parse(localStorage.getItem(localStorageKey) ?? '{}');
form.elements.email.value = saved.email ?? '';
commentField.value = saved.comment ?? '';

form.addEventListener('submit', evt => {
  evt.preventDefault();

  let inputsData = {
    email: form.elements.email.value,
    comment: commentField.value,
  };

  for (const inputs of inputField) {
    if (inputs.value === '') {
      inputs.setCustomValidity('Fill please all fields');
      inputs.reportValidity();
      return false;
    } else {
      inputs.setCustomValidity('');
      inputsData = {
        email: inputs.value,
        comment: commentField.value,
      };
    }
  }

  localStorage.removeItem(localStorageKey);
  console.log(inputsData);
  form.reset();
  return true;
});
