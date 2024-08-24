/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function encriptarTexto() {
    let textoValor = document.getElementById('valorTexto').value;
    
    if (textoValor === '') {
        swal("Lo siento","¡debe escribir un mensaje!","info");
    }else{
        if(/[A-ZáéíóúÁÉÍÓÚüñ0-9]/.test(textoValor)){
            swal("El texto contiene caracteres no permitidos"," letras mayúsculas, acentos o números.","error");
        return;
        }
        let resultado = "";
        let letras = textoValor.split('');
        resultado = letras.map(cambioLetrasEncriptadas).join('');

        divOculto();
        asignarTextoElemento('span',`${resultado}`);
        limpiarCaja();
    }
    
}

function desencriptarTexto() {
    let textoValor = document.getElementById('valorTexto').value;
    if (textoValor === '') {
        swal("Lo siento","¡debe escribir un mensaje!","info");
    } else {
        let resultado = textoValor.replace(/ai/g, "a")
                                 .replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
        divOculto();
        asignarTextoElemento('#resultadoTexto', `${resultado}`);
        limpiarCaja();
    }
}

function divOculto() {
    var div = document.getElementById("sidebar-resultado");
    var div2 = document.getElementById("sidebar");
    if (div.style.display === "none") {
        div.style.display = "block";
        div2.style.display = "none";
    } 
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function copiarTexto (resultado){
    let copiar = document.getElementById('resultadoTexto').innerText;

    let inputTemporal = document.createElement('input');
    inputTemporal.value = copiar;
    document.body.appendChild(inputTemporal);
    inputTemporal.select();
    document.execCommand('copy');

    document.body.removeChild(inputTemporal);
    swal("Buen trabajo","texto copiado con exito",'success');

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorTexto').value = '';
}

function cambioLetrasEncriptadas(cambio) {
    switch (cambio) {
        case 'a':
            cambio = 'ai';
            break;
        case 'e':
            cambio = 'enter';
            break;
        case 'i':
            cambio = 'imes';
            break;
        case 'o':
            cambio = 'ober';
            break;
        case 'u':
            cambio = 'ufat';
            break;
        default:
            break;
    }
    return cambio;
}

