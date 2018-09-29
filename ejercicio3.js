var index = 0;

function Validar(text) {
    try {
        ValidarTexto(text);
        console.log("Correcto");
    } catch (error) {
        console.log(error + ", en la posicion: " + index);
    }
}

function siguienteCaracter(text, index) {
    return text.substring(index, index + 1);
}