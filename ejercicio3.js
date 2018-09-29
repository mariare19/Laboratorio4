var indice = 0;

function Validar(cadena) {
    try {
        ValidarTexto(cadena);
        console.log("Cadena correcta");
    } catch (error) {
        console.log(error + ", en la posicion: " + (indice + 1));
    }
}

function siguienteCaracter(cadena, indice) {
    return cadena.substring(indice, indice + 1);
}

function ValidarTexto(cadena) {
    let caracter = siguienteCaracter(cadena, indice);
    switch (caracter) {
        case "]":
            break;
        case "}":
            break;
        case ")":
            break;
        case "(":
            indice = indice + 1;
            ValidarTexto(cadena);
            caracter = siguienteCaracter(cadena, indice);
            if (caracter != ")") {
                throw "Se espera )";
            }
            indice = indice + 1;
            break;
        case "{":
            indice = indice + 1;
            ValidarTexto(cadena);
            caracter = siguienteCaracter(cadena, indice);
            if (caracter != "}") {
                throw "Se espera }";
            }
            indice = indice + 1;
            break;
        case "[":
            indice = indice + 1;
            ValidarTexto(cadena);
            caracter = siguienteCaracter(cadena, indice);
            if (caracter != "]") {
                throw "Se espera ]";
            }
            indice = indice + 1;
            break;
        default:
            break;
    }
}

Validar("[{()}]");