var validateName = false;
var validateEmail = false;
var validateMessage = false;

function nameValidation() {
    var name = document.getElementsByName("nom")[0].value;
    
    if(name === "") {
        $('#name-error').text("That field cannot be left empty.");
        validateName = false;
    } else if(name.length < 4) {
        $('#name-error').text("Please, enter a valid name. Yours seems too short.");
        validateName = false;
    } else if(name.length > 40) {
        $('#name-error').text("Please, enter a valid name. Yours seems too long.");
        validateName = false;
    } else {
        $('#name-error').text("");
        validateName = true;
    }
}

function emailValidation() {
    var email = document.getElementsByName("email")[0].value;
    
    if(email === "") 
    {
        $('#email-error').text("That field cannot be left empty.");
        validateEmail = false;
    } 
    else if(email.length < 10) 
    {
        $('#email-error').text("Please, enter a valid email. Yours seems too short.");
        validateEmail = false;
    } 
    else if(email.length > 50) 
    {
        $('#email-error').text("Please, enter a valid email. Yours seems too long.");
        validateEmail = false;
    } 
    else if(!email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)) 
    {
        $('#email-error').text("Please, enter a valid email. Unexpected email format.");
        validateEmail = false;
    } 
    else {
        $('#email-error').text("");
        validateEmail = true;
    }
}

function messageValidation() {
    var message = document.getElementsByName("message")[0].value;

    if(message === "") {
        validateMessage = false;
        $('#message-error').text("That field cannot be left empty.");
    } 
    else if(message.length < 20) {
        validateMessage = false;
        $('#message-error').text("Your message is quite short. Was it an error ?");
    } 
    else if(message.length > 1000) {
        validateMessage = false;
        $('#message-error').text("Your message seems too long. Can you reduce its length ?");
    } 
    else {
        $('#message-error').text("");
        validateMessage = true;
    }
}


function formValidation() {
    var validationState = validateName && validateEmail && validateMessage;

    if(!validationState) {
        $('#submission-status').text("The form hasn't been submitted. Please check each field for errors.")
    }

    return validationState;
}