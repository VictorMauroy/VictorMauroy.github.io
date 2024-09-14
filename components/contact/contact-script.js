var validateName = false;
var validateEmail = false;
var validateMessage = false;

function nameValidation() {
    var name = document.getElementsByName("nom")[0].value;
    
    if(name === "") {
        $('#name-error').text("That field cannot be empty.");
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
        $('#email-error').text("That field cannot be empty.");
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