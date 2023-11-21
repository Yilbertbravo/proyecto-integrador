//****Boton Ver mas (ver menos)**** */
//**Intente no repetir codigo y hacerlo con parametros en esta parte, pero no pude hacerlo. */

const paragraphCard = document.querySelector(".card__text__short1");
const buttonShow = document.querySelector(".btn--ver--mas1");

function show() {

    paragraphCard.className = "card__text__short1";
    buttonShow.innerHTML = "Ver más";
    buttonShow.onclick = hide;
}

function hide() {
    paragraphCard.className = " ";
    buttonShow.innerHTML = "Ver menos";
    buttonShow.onclick = show;
}

const paragraphCard2 = document.querySelector(".card__text__short2");
const buttonShow2 = document.querySelector(".btn--ver--mas2");

function show2() {

    paragraphCard2.className = "card__text__short2";
    buttonShow2.innerHTML = "Ver más";
    buttonShow2.onclick = hide2;
}

function hide2() {
    paragraphCard2.className = "";
    buttonShow2.innerHTML = "Ver menos";
    buttonShow2.onclick = show2;
}
const paragraphCard3 = document.querySelector("#card__text__short3");
const buttonShow3 = document.querySelector(".btn--ver--mas3");

function show3() {

    paragraphCard3.className = "card__text__short3";
    buttonShow3.innerHTML = "Ver más";
    buttonShow3.onclick = hide3;
}

function hide3() {
    paragraphCard3.className = "";
    buttonShow3.innerHTML = "Ver menos";
    buttonShow3.onclick = show3;
}

const paragraphCard4 = document.querySelector("#card__text__short4");
const buttonShow4 = document.querySelector(".btn--ver--mas4");

function show4() {

    paragraphCard4.className = "card__text__short4";
    buttonShow4.innerHTML = "Ver más";
    buttonShow4.onclick = hide4;
}

function hide4() {
    paragraphCard4.className = "";
    buttonShow4.innerHTML = "Ver menos";
    buttonShow4.onclick = show4;
}

const paragraphCard5 = document.querySelector("#card__text__short5");
const buttonShow5 = document.querySelector(".btn--ver--mas5");

function show5() {

    paragraphCard5.className = "card__text__short5";
    buttonShow5.innerHTML = "Ver más";
    buttonShow5.onclick = hide5;
}

function hide5() {
    paragraphCard5.className = "";
    buttonShow5.innerHTML = "Ver menos";
    buttonShow5.onclick = show5;
}


const paragraphCard6 = document.querySelector("#card__text__short6");
const buttonShow6 = document.querySelector(".btn--ver--mas6");

function show6() {

    paragraphCard6.className = "card__text__short6";
    buttonShow6.innerHTML = "Ver más";
    buttonShow6.onclick = hide6;
}

function hide6() {
    paragraphCard6.className = "";
    buttonShow6.innerHTML = "Ver menos";
    buttonShow6.onclick = show6;
}

const paragraphCard7 = document.querySelector("#card__text__short7");
const buttonShow7 = document.querySelector(".btn--ver--mas7");

function show7() {

    paragraphCard7.className = "card__text__short7";
    buttonShow7.innerHTML = "Ver más";
    buttonShow7.onclick = hide7;
}

function hide7() {
    paragraphCard7.className = "";
    buttonShow7.innerHTML = "Ver menos";
    buttonShow7.onclick = show7;
}

const paragraphCard8 = document.querySelector("#card__text__short8");
const buttonShow8 = document.querySelector(".btn--ver--mas8");

function show8() {

    paragraphCard8.className = "card__text__short8";
    buttonShow8.innerHTML = "Ver más";
    buttonShow8.onclick = hide8;
}

function hide8() {
    paragraphCard8.className = "";
    buttonShow8.innerHTML = "Ver menos";
    buttonShow8.onclick = show8;
}

const paragraphCard9 = document.querySelector("#card__text__short9");
const buttonShow9 = document.querySelector(".btn--ver--mas9");

function show9() {

    paragraphCard9.className = "card__text__short9";
    buttonShow9.innerHTML = "Ver más";
    buttonShow9.onclick = hide9;
}

function hide9() {
    paragraphCard9.className = "";
    buttonShow9.innerHTML = "Ver menos";
    buttonShow9.onclick = show9;
}

const paragraphCard10 = document.querySelector("#card__text__short10");
const buttonShow10 = document.querySelector(".btn--ver--mas10");

function show10() {

    paragraphCard10.className = "card__text__short10";
    buttonShow10.innerHTML = "Ver más";
    buttonShow10.onclick = hide10;
}

function hide10() {
    paragraphCard10.className = "";
    buttonShow10.innerHTML = "Ver menos";
    buttonShow10.onclick = show10;
}

//******* */



//**************Contador carrito*************** */


const buttonAdd = document.querySelector(".button--add");
const buttonRemove = document.querySelector(".button--remove");
const cardCounter = document.querySelector(".card__counter");


function sumar(idContador) {
    let valorAnterior = document.getElementById(idContador);

    let valorAnteriorCarrito = document.getElementById("carrito");
    let valorNuevo = Number(valorAnterior.innerHTML) + 1;
    valorAnterior.innerHTML = valorNuevo;
    let valorNuevoCarrito = Number(valorAnteriorCarrito.innerHTML) + 1;
    valorAnteriorCarrito.innerHTML = valorNuevoCarrito;

    return (valorNuevoCarrito);

}

function restar(idContador) {
    let valorAnterior = document.getElementById(idContador);

    if (Number(valorAnterior.innerHTML) > 0) {
        let valorAnteriorCarrito = document.getElementById("carrito");
        let valorNuevo = Number(valorAnterior.innerHTML) - 1;
        valorAnterior.innerHTML = valorNuevo;
        let valorNuevoCarrito = Number(valorAnteriorCarrito.innerHTML) - 1;
        valorAnteriorCarrito.innerHTML = valorNuevoCarrito;
    }

}


//*
//********Validaciones Ingreso Producto*********** */

const inputName = document.getElementById("id-name-product");
const inputDescriptionProduct = document.getElementById("id-description-product");
const inputPriceProduct = document.getElementById("id-price-product");

const buttonValidate = document.getElementById("btn-validate-product");


const regexName = /^[a-zA-Z\s]{3,}$/;
const regexDescriptionProduct = /[a-zA-Z\s]{30,}$/;
const regexPriceProduct = /(?:- ?)?\d+(?:,\d+)?/;


function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre ingresado es invalido";
    } else {
        inputName.nextElementSibling.innerText = "";
    }
}

function validateDescriptionProduct() {
    if (!regexDescriptionProduct.test(inputDescriptionProduct.value)) {
        inputDescriptionProduct.nextElementSibling.innerText = "Debe ingresar alguna descripción, mayor de 30 caracteres";
    } else {
        inputDescriptionProduct.nextElementSibling.innerText = "";
    }
}

function validatePriceProduct() {
    if (!regexPriceProduct.test(inputPriceProduct.value)) {
        inputPriceProduct.nextElementSibling.innerText = "Debe ingresar un precio valido";
    } else {
        inputPriceProduct.nextElementSibling.innerText = "";
    }
}

function validate() {
    validateName();
    validateDescriptionProduct();
    validatePriceProduct();
}

buttonValidate.onclick = validate;


//********Validaciones Contacto*********** */
const inputNameContact = document.getElementById("id-name-contact");
const inputLastNameContact = document.getElementById("id-lastname-contact");
const inputEmailContact = document.getElementById("id-email-contact");
const inputDescriptionContact = document.getElementById("id-description-product");

const buttonValidateConsult = document.getElementById("validate-consult");

const regexNameContact = /^[a-zA-Z\s]{3,}$/;
const regexEmailContact = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexDescriptionContact = /[a-zA-Z\s]{30,}$/;



function validateNameConsult() {
    if (!regexNameContact.test(inputNameContact.value)) {
        inputNameContact.nextElementSibling.innerText = "El nombre es invalido";
    } else {
        inputNameContact.nextElementSibling.innerText = " ";
    }
}

function validateLastName() {
    if (!regexNameContact.test(inputLastNameContact.value)) {
        inputLastNameContact.nextElementSibling.innerText = "El apellido es invalido";
    } else {
        inputLastNameContact.nextElementSibling.innerText = " ";
    }
}

function validateEmailContact() {
    if (!regexEmailContact.test(inputEmailContact.value)) {
        inputEmailContact.nextElementSibling.innerText = "El email ingresado es invalido";


    } else {
        inputDescriptionContact.nextElementSibling.innerText = " ";
    }
}

function validateDescriptionContact() {
    if (!regexDescriptionContact.test(inputDescriptionContact.value)) {
        inputDescriptionContact.nextElementSibling.innerText = "Ingrese una descripción";
    } else {
        inputDescriptionContact.nextElementSibling.innerText = " ";
    }
}


function validateContact() {
    console.log("hola")
    // validateNameConsult();
    // // validateLastName();
    // // validateEmailContact();
    // // validateDescriptionContact();
}

buttonValidateConsult.onclick = validateContact;