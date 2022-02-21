
const throttle = require('lodash.throttle');
const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const saveData = localStorage.getItem(KEY);
const saveDataParsed = JSON.parse(saveData);

if (saveDataParsed) {
    form['email'].value = savedDataParsed.email;
    form['message'].value = savedDataParsed.message;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
    const formData = { email: `${form["email"].value}`, message: `${form["message"].value}` };
    const formDataSaved = JSON.stringify(formData);

    localStorage.setItem(KEY, formDataSaved);
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const formData = { email: `${form['email'].value}`, message: `${form['message'].value}` };
    console.log(formData);

    if (formData.email === '' || formData.message === '') {
        return alert("Заполните все поля!");
    }

    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
}