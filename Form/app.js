const nameElement = document.getElementsByClassName('input_field')[0].children[0];
const subjectElement = document.getElementsByClassName('input_field')[1].children[0];
const phoneElement = document.getElementsByClassName('input_field')[2].children[0];
const emailElement = document.getElementsByClassName('input_field')[3].children[0];
const messageElement = document.getElementsByClassName('input_field')[4].children[0];
const errorMessage = document.getElementById('error_message');
const submit = document.getElementById('submit');
submit.addEventListener('click', sendInfo)
function validatePhone(phone) {
    if (phone.length === 10) {
        //phone.value = '';
        if (errorMessage.textContent = 'Incorrect phone') {
            errorMessage.textContent = '';
        }
    } else {
        errorMessage.textContent = 'Incorrect phone';
    }
}
function validateSubject(subject) {
    if (subject.length >= 10) {
        //subject.value = '';
        if (errorMessage.textContent = 'Incorrect subject') {
            errorMessage.textContent = '';
        }
    } else {
        errorMessage.textContent = 'Incorrect subject';
    }

}
/*
function validateEmail(email) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //console.log(email.match(validRegex));
    if (email.match(validRegex) == null) {
        errorMessage.textContent = 'Incorrect email';
    } else {
        if (errorMessage.textContent = 'Incorrect email') {
            errorMessage.textContent = '';
        }
    }
}
*/

function validateMessage(message) {
    if (message.length >= 10) {
        if (errorMessage.textContent = 'Incorrect message') {
            errorMessage.textContent = '';
        }
    } else {
        errorMessage.textContent = 'Incorrect message';
    }
}
function validateName(name) {
    if (name.length >= 2) {
        //nameElement.value = '';
        if (errorMessage.textContent = 'Incorrect name') {
            errorMessage.textContent = '';
        }
    } else {
        errorMessage.textContent = 'Incorrect name';
    }
}
function sendInfo(ev) {
    ev.preventDefault();
    const name = nameElement.value;
    const subject = subjectElement.value;
    const phone = phoneElement.value;
    const email = emailElement.value;
    const message = messageElement.value;
    validateName(name);
    validateSubject(subject);
    validatePhone(phone);
    validateEmail(email);
    validateMessage(message);
    //console.log(errorMessage.textContent)
    if (errorMessage.textContent == '') {
        nameElement.value = '';
        subjectElement.value = '';
        phoneElement.value = '';
        emailElement.value = '';
        messageElement.value = '';
        confirm('Form Submitted Succefully!')
    }


}