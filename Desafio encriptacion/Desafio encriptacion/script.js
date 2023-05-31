//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const mensajeEntrada = document.querySelector(".text-tarea");
const mensajeSalida = document.querySelector(".mensaje");

function btnEncriptar(){
    const textEncriptado = encriptar(mensajeEntrada.value)
    mensajeSalida.value = textEncriptado;
    mensajeEntrada.value ="";
    mensajeSalida.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textEncriptado = desencriptar(mensajeEntrada.value)
    mensajeSalida.value = textEncriptado;
    mensajeEntrada.value ="";
}

function btnCopiar(){
    copiar(mensajeSalida.value);
    mensajeSalida.value = "";
}

function copiar (mensajeCopiado){
    const temp = document.createElement(mensajeCopiado);
    temp.value = mensajeCopiado;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');

}
function encriptar(mensajeEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++){
        if(mensajeEncriptado.includes(matrizCodigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return mensajeEncriptado;
}

function desencriptar(mensajeDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++){
        if(mensajeDesencriptado.includes(matrizCodigo[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return mensajeDesencriptado;
}