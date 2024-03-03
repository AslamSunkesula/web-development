var email = document.forms['form']['email'];
var password = document.forms['form']['password']

var email_error = document.getElementById("error-email");
var pass_error = document.getElementById("error-pass");


function validated() {
    if (email.value.length < 9) {
        email.style.border = "10px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
}