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

function onSaveInfo() {
    const savedMessage = localStorage.getItem(LOCAL_KEY);
    if (savedMessage) {
        const {email, message} = JSON.parse(savedMessage);
        form.email.value = email;
        form.message.value = message;
        formData.email = email;
        formData.message = message;
}
}
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
    console.log(formData);
}

