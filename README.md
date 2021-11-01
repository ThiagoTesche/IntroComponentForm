# Frontend Mentor - Intro component with signup form

![Design preview for the Intro component with signup form coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My design](#my-design)
  - [Where to find everything](#where-to-find-everything)
  - [Link to site](#link-to-site)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

<br>

# Overview

## The challenge

The challenge is to build out this intro component with signup form and get it looking as close to the design as possible.

<br>

## My design

![](./design/my-design-desktop.png)

## Where to find everything

-- The designs are inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

-- The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

-- You will find all the required assets in the `/images` folder. The assets are already optimized.

-- The css's archives are in `scss` folder.

### Link to site

- Live Site URL: [intro-component-form-thiago-tesche.netlify.app](https://intro-component-form-thiago-tesche.netlify.app/)

<br>

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- JavaScript
- Regular Expressions 

<br>

### What I learned

Building this project, I learned about HTML semantics, CSS custom properties, Flexbox and functions from JavaScript and how to validate expressions on form. I also learned how to use "@mixin", "@include" and ":root" in CSS and new way to write css. 

```css
.buttonPay{
    margin-top: 30px;
    @include font;
    font-size: 1em;

    button{
        padding: 2px 40px;
    }
}
```

```javascript
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


```
<br>

## Author

- Author - Thiago Tesche
- Frontend Mentor - [@ThiagoTesche](https://www.frontendmentor.io/profile/ThiagoTesche)
- Instagram - [@thiago_tesche](https://www.instagram.com/thiago_tesche/)
- LinkedIn - [Thiago Tesche](https://www.linkedin.com/in/thiago-tesche-996b52213/)


<strong>Thank You!</strong>