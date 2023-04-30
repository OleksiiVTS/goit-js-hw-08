import _ from 'lodash';

const form = document.querySelector(".feedback-form");
// const formInput = form.addEventListener('input', _.throttle(saveValueForm, 500));
const formInput = form.addEventListener('input', saveValueForm);
const formSubmit = form.addEventListener('submit', removeValueForm);
const LOCALSTORAGE_KEY = "feedback-form-state";
let saveValue = {
    email: "",
    message: "",
};

getToLocalStorare();

function saveValueForm(event) {
    const {
        elements: { email, message }
    } = event.currentTarget;
    setToLocalStorare(email.value, message.value);
    getToLocalStorare();
};

function setToLocalStorare(email, message) {
    saveValue.email = email;
    saveValue.message = message;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveValue));
};

function getToLocalStorare() {
    const getInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(getInfo)
    if (getInfo === null) {
        form.email.value = "";
        form.message.value = "";
    } else {
        form.email.value = getInfo.email;
        form.message.value = getInfo.message;
    };
};

function removeValueForm(event) {
    event. preventDefault()
    console.log(form.email.value)
    console.log(form.message.value)
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}