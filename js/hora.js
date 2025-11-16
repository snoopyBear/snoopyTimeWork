const horaTexto = document.getElementById("horaTexto");
const fechaTexto = document.getElementById("fechaTexto");

cambiarHora();
cambiarFecha();

setInterval(() => {
    cambiarHora();
}, 1000);

function cambiarHora(){
    const today = new Date();
    horaTexto.innerText = `${today.getHours().toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})}:${today.getMinutes().toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})}:${today.getSeconds().toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})}`;
    if ((today.getHours() == "0") && (today.getMinutes() == "0") && (today.getSeconds() == "0")) {
        cambiarFecha();
    }
}

function cambiarFecha() {
    const today = new Date();
    fechaTexto.innerText = `${today.getDate("DD")} ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`;
}