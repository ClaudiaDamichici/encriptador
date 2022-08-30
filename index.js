const textoIngresado = document.querySelector(".textoIngresado");
const mensaje = document.querySelector(".mensaje");

function btnEncriptador(){
    const TextoEncriptado = encriptar(textoIngresado.value)
    mensaje.value = TextoEncriptado;
    mensaje.getElementsByClassName.backgroundImage = "none";
    textoIngresado.value = ""
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}


function btnDesencriptador(){
    const TextoEncriptado = desencriptar(textoIngresado.value)
    mensaje.value = TextoEncriptado;
    mensaje.getElementsByClassName.backgroundImage = "none";
    textoIngresado.value = ""
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado")
}

