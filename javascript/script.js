
// usar o Regex para validar formulario 

const button = document.getElementById("button");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


button.addEventListener("click", ()=>{
    if(validarFirstName() == true & validarLastName() == true & validarEmailFora() == true & validarEmail() == true & validarSenha() == true){
        console.log('todos certos');
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
    }else{
        return false;
    }
});

function validarFirstName(){
    let citeFirstName = document.querySelector(".error-first-name");
    if(firstName.value == '' || firstName.value == null){
        let error = firstName;
        error.setAttribute('class', 'error');
        citeFirstName.style.visibility = "visible";  
    }else{
        citeFirstName.style.visibility = "hidden";
        firstName.classList.remove('error');
        firstName.classList.add('input');
        return true;
    }
}


function validarLastName(){
    let citeLastName = document.querySelector(".error-last-name");
    if(lastName.value == '' || lastName.value == null){
        let error = lastName;
        error.setAttribute('class', 'error');
        citeLastName.style.visibility = "visible";
    }else{
        citeLastName.style.visibility = "hidden";
        lastName.classList.remove('error');
        lastName.classList.add('input');
        return true;
    }
}

function validarEmailFora(){
    if(regexEmail.test(email.value)){
        return(true);
    }else{
        return (false);
    }
}

function validarEmail(){
    let citeEmail = document.querySelector(".error-email");
    if(validarEmailFora() == false){
        let error = email;
        error.setAttribute('class', 'error');
        citeEmail.style.visibility = "visible";
    }else if(validarEmailFora() == true){
        citeEmail.style.visibility = "hidden";
        email.classList.remove("error");
        email.classList.add("input");
        return(true);
    }else{
        return false;
    }
}

function validarSenha(){
    let citeSenha = document.querySelector('.error-password');
    if( password.value == '' || password.value == null){
        let error = password;
        error.setAttribute('class', 'error');
        citeSenha.style.visibility = "visible";
    }else{
        citeSenha.style.visibility = "hidden";
        password.classList.remove("error");
        password.classList.add("input");
        return true;
    }
}

