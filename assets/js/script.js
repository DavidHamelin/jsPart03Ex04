function twinPassword() {
    /* 1ere solution
       if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
        // condition valeurs égales
        document.getElementById("password").style.border = "3px solid green";
        document.getElementById("confirmPassword").style.border = "3px solid green";
    }
    else {
        // condition valeurs différentes
        document.getElementById("password").style.border = "3px solid red";
        document.getElementById("confirmPassword").style.border = "3px solid red";
    }
    return false;*/
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword")
    if (password.value === confirmPassword.value) {
        // condition valeurs égales
        password.style.border = "3px solid green";
        confirmPassword.style.border = "3px solid green";
    }
    else {
        // condition valeurs différentes
        password.style.border = "3px solid red";
        confirmPassword.style.border = "3px solid red";
    }
}