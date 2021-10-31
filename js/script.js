
// usar o Regex para validar formulario 

const button = document.getElementById("button");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("password");


button.addEventListener("click", ()=>{
    validarFirstName();
    validarLastName();
    validarEmail();
});

function validarFirstName(){
    var cite = document.querySelector(".error-first-name");
    if(firstName.value == '' || firstName.value == null){
        let error = firstName;
        error.setAttribute('class', 'error');
        cite.style.visibility = "visible";  
    }else{
        return true;
    }
}

function validarLastName(){
    let cite = document.querySelector(".error-last-name");
    if(lastName.value == '' || lastName.value == null){
        let error = lastName;
        error.setAttribute('class', 'error');
        cite.style.visibility = "visible";
    }else{
        return true;
    }
}

