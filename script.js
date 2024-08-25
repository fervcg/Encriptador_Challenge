const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const errorElemento = document.querySelector(".error");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    if (validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function validarTexto() {
    const texto = textArea.value;
    const regex = /^[a-z\s]*$/; // Permitir solo letras minúsculas y espacios

    if (!regex.test(texto)) {
        errorElemento.style.display = 'block';
        console.log("Texto contiene caracteres inválidos");
        return false;
    } else {
        errorElemento.style.display = 'none';
        return true;
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if (validarTexto()) {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Copiar el texto encriptado/desencriptado
function copiarTexto() {
    mensaje.select(); //Selecciona el texto dentro del mensaje
    document.execCommand("copy"); //ejecuta el comando para copiar
}
