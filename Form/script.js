const errorMessageElement = document.getElementById('error_message');
const nameElement = document.getElementById('name');
const subjectElement = document.getElementById('subject');
const phoneElement = document.getElementById('phone');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
const submit = document.getElementById('submit');
//console.log(nameElement);
submit.addEventListener('click', validate);
function validate(ev){
    function validateName(name){
        if(name.length<2){
            //errorMessageElement.textContent = 'Incorrect Name!';
            return false;
        }
        return true;
    }
    function validateSubject(subject){
        if(subject.length<10){
            //errorMessageElement.textContent = 'Incorrect Subject!';
            return false;
        }
        return true;
    }
    function validatePhone(phone){
        if(phone.length!==10){
            //errorMessageElement.textContent = 'Incorrect Phone!';
            return false;
        }
        return true;
    }
    function validateEmail(email){
        regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!email.match(regex)){
            //errorMessageElement.textContent = 'Incorrect Email!';
            return false;
        }
        return true;
    }
    function validateMessage(message){
        if(message.length<140){
            //errorMessageElement.textContent = 'Incorrect Message!';
            return false;
        }
        return true;
    }
    let name = nameElement.value;
    let subject = subjectElement.value;
    let phone = phoneElement.value;
    let email = emailElement.value;
    let message = messageElement.value;

    if(validateName(name)===false){
        errorMessageElement.textContent = 'Incorrect Name!';
    }
    if(validateSubject(subject)===false){
        errorMessageElement.textContent = 'Incorrect Subject!';
    }
    if(validatePhone(phone)===false){
        errorMessageElement.textContent = 'Incorrect Phone!';
    }
    if(validateEmail(email)===false){
        errorMessageElement.textContent = 'Incorrect Email!';
    }
    if(validateMessage(message)===false){
        errorMessageElement.textContent = 'Incorrect Message!';
    }
    if(validateName(name) && validateSubject(subject) && validatePhone(phone) && validateEmail(email) && validateMessage(message)){
        errorMessageElement.textContent = '';
        nameElement.value = '';
        subjectElement.value = '';
        phoneElement.value = '';
        emailElement.value = '';
        messageElement.value = '';
        confirm('From Submitted Succefully!');
    }
    ev.preventDefault();
    
}