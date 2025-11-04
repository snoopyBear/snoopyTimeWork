const elegirReloj = document.getElementById("elegirReloj");
const elegirCuentaAtras = document.getElementById("elegirCuentaAtras");
const elegirHora = document.getElementById("elegirHora");

const reloj = document.getElementById("reloj");
const cuentaAtras = document.getElementById("cuentaAtras");
const hora = document.getElementById("hora");

let active = [reloj, elegirReloj];

elegirReloj.onclick = function (){
    elegirReloj.style.backgroundColor = "#3F3F46";
    reloj.style.display = "block";

    elegirCuentaAtras.style.backgroundColor = "transparent";
    cuentaAtras.style.display = "none";
    elegirHora.style.backgroundColor = "transparent";
    hora.style.display = "none";
}

elegirCuentaAtras.onclick = function () {
    elegirCuentaAtras.style.backgroundColor = "#3F3F46";
    cuentaAtras.style.display = "block";
    
    elegirReloj.style.backgroundColor = "transparent";
    reloj.style.display = "none";
    elegirHora.style.backgroundColor = "transparent";
    hora.style.display = "none";
}

elegirHora.onclick = function() {
    elegirHora.style.backgroundColor = "#3F3F46";
    hora.style.display = "block";

    elegirCuentaAtras.style.backgroundColor = "transparent";
    cuentaAtras.style.display = "none";
    elegirReloj.style.backgroundColor = "transparent";
    reloj.style.display = "none";
}