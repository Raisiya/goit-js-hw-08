import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
console.log(form);
let formData = {};
onSaveInfo();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
    console.log(formData);
}

function onSaveInfo() {
    const savedMessage = localStorage.getItem(LOCAL_KEY);
    if (savedMessage) {
        form.email.value = savedMessage.email;
        form.message.value = savedMessage.message;
}
}
