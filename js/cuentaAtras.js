const botonesInsertarNum = document.getElementsByClassName("insertarNum");
const textoCuentaAtras = document.getElementById("cuentaAtrasTexto");
const startCuentaAtras = document.getElementById("startCuentaAtras");
const pararCuentaAtras = document.getElementById("pararCuentaAtras");
const reiniciarCuentaAtras = document.getElementById("reiniciarCuentaAtras");

let tiempo = [0, 0, 0, 0, 0, 0]

for (let index = 0; index < botonesInsertarNum.length; index++) {
    let element = botonesInsertarNum[index];
    element.onclick = function () {
        tiempo.shift();
        tiempo.push(parseInt(element.innerHTML));
        textoCuentaAtras.innerText = `${tiempo[0]}${tiempo[1]}:${tiempo[2]}${tiempo[3]}:${tiempo[4]}${tiempo[5]}`
    }

}

startCuentaAtras.onclick = function () {

    if (parseInt(tiempo.join("")) == 0) {
        return;
    }

    intervalo = setInterval(() => {
        cambiarCuentaAtras();
        actualizarTextoCuentaAtras();
        if (parseInt(tiempo.join("")) == 0) {
            clearInterval(intervalo);
        }
    }, 10);

}

pararCuentaAtras.onclick = function () {
    clearInterval(intervalo);
}

reiniciarCuentaAtras.onclick = function () {
    clearInterval(intervalo);
    tiempo = [0, 0, 0, 0, 0, 0];
    actualizarTextoCuentaAtras();
}

function cambiarCuentaAtras(){
    tiempo[tiempo.length - 1] -= 1;
    for (let index = tiempo.length - 1; index > 0; index--) {
        if (tiempo[index] == -1) {
            tiempo[index] = 9;
            tiempo[index - 1] -= 1;
        }
    }
}

function actualizarTextoCuentaAtras () {
    textoH = parseInt(`${tiempo[0]}${tiempo[1]}`).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    textoMin = parseInt(`${tiempo[2]}${tiempo[3]}`).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    textoSec = parseInt(`${tiempo[4]}${tiempo[5]}`).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});

    textoCuentaAtras.innerText = `${textoH}:${textoMin}:${textoSec}`;
}