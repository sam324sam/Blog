let resultado;
let textoArray = ["Java", "JavaScript","PHP", "HTML", "CSS","SQL"]; /* No acepta caracteres especiales o acentos*/ 
let prueba;
let i = 0;
let contadorPalabra = 0;
let abcMinus = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
];
let abcMayus = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
let menuDesplegable;

document.addEventListener("DOMContentLoaded", function () {
    resultado = document.getElementById("nombre");
    prueba = document.getElementById("nombre_lenguaje");
    menuDesplegable = document.getElementById("");
    efecto(0, textoArray[0]);
});

function efecto(contador, texto) {
    setTimeout(() => {
        span = document.createElement('span');
        if (contador >= texto.length) {
            setTimeout(() => {
                reiniciar();
            }, 1800);
        }else {
            if (!esMayuscula(texto.charAt(contador))) {
                if (abcMinus[i] == texto.charAt(contador)) {
                    prueba.textContent = "";
                    span.textContent += abcMinus[i];
                    resultado.appendChild(span);
                    i = 0;
                    efecto(contador + 1, texto);
                } else {
                    var colorClass = 'color' + ((i % 5) + 1);
                    prueba.className = colorClass;
                    prueba.textContent = abcMinus[i];
                    i++;
                    efecto(contador, texto);
                }
            } else {
                if (abcMayus[i] == texto.charAt(contador)) {
                    prueba.textContent = "";
                    span.textContent += abcMayus[i];
                    resultado.appendChild(span);
                    i = 0;
                    efecto(contador + 1, texto);
                } else {
                    var colorClass = 'color' + ((i % 5) + 1);
                    prueba.className = colorClass;
                    prueba.textContent = abcMayus[i];
                    i++;
                    efecto(contador, texto);
                }
            }
        }
    }, 60);
}

function reiniciar() {
    eliminarHijo();
    contadorPalabra++;
    if (contadorPalabra >= textoArray.length) {
        contadorPalabra = 0
    }
}

function eliminarHijo() {
    setTimeout(() => {
        resultado.removeChild(resultado.lastChild);
        if (resultado.lastChild) {
            eliminarHijo();
        }else {
            setTimeout(() => {
                efecto(0,textoArray[contadorPalabra]);
            }, 300);
        }  
    }, 300);
}

function esMayuscula(caracter) {
    return /^[A-Z]/.test(caracter);
}

function menu(elemento) {
    if (elemento.id == 'menu_off') {
        alert ("HOLA");
    }else {
        alert ("HOLaA");
    }
}