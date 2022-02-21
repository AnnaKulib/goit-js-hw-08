
const throttle = require('lodash.throttle');
const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

updateForm();

function updateForm() {
    const saveData = localStorage.getItem(KEY);
    // console.log(saveData);
        if(saveData) {
            const {email, message} = JSON.parse(saveData);
            // console.log({email, message});
            form.email.value = email;
            form.message.value = message;
            formData.email = email;
            formData.message = message;
        }
}

function onInput() {
   formData.email = form.elements.email.value;
   formData.message = form.elements.message.value;

    localStorage.setItem(KEY, JSON.stringify(formData));
    // console.log(formData);
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    formData.forEach((value, key) => {
        console.log(` ${key}: ${value}`);
    });

    // if (!formData.value|| !formData.key) {
    //     return alert("Заполните все поля!");
    // }

    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}