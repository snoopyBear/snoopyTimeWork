const elegirReloj = document.getElementById("elegirReloj");
const elegirCuentaAtras = document.getElementById("elegirCuentaAtras");

const reloj = document.getElementById("reloj");
const cuentaAtras = document.getElementById("cuentaAtras");

elegirReloj.onclick = function (){
    elegirCuentaAtras.style.backgroundColor = "transparent";
    elegirReloj.style.backgroundColor = "#3F3F46";
    reloj.style.display = "block";
    cuentaAtras.style.display = "none";
}

elegirCuentaAtras.onclick = function () {
    elegirReloj.style.backgroundColor = "transparent";
    elegirCuentaAtras.style.backgroundColor = "#3F3F46";
    cuentaAtras.style.display = "block";
    reloj.style.display = "none";
}