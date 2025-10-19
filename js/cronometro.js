let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let textoH;
let textoMin;
let textoSec;
let textoMS;

let intervalo;

const textoCronometro = document.getElementById("cronometro");
const botonEmpezar = document.getElementById("startReloj");
const botonParar = document.getElementById("pararReloj");
const botonReiniciar = document.getElementById("reiniciarReloj");

botonEmpezar.onclick = function () {

    clearInterval(intervalo);
    m = 0;
    s = 0;
    ms = 0;
    
    intervalo = setInterval(() => {
        cambiarCronometro();
        actualizarTextoCronometro();
    }, 10);
}

botonParar.onclick = function () {
    clearInterval(intervalo);
}

botonReiniciar.onclick = function () {
    clearInterval(intervalo);
    m = 0;
    s = 0;
    ms = 0;

    actualizarTextoCronometro();

}

function cambiarCronometro() {
    ms += 1;
    if (ms == 100){
        ms = 0;
        s += 1;

        if (s == 60) {
            m += 1;
        }

    }    

}

function actualizarTextoCronometro () {
    textoMin = m.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    textoSec = s.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    textoMS = ms.toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});

    textoCronometro.innerText = `${textoMin}:${textoSec}:${textoMS}`;
}