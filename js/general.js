const barraTareasBloc = document.getElementById("barraTareasBloc");
const tareasWrapper = document.getElementById("tareasWrapper");
const descripciones = document.getElementsByClassName("descripcion");
const root = document.documentElement;

console.log(getComputedStyle(descripciones[0]).width);


barraTareasBloc.addEventListener("mousedown", function(evento) {

    let posicionInicial = event.clientX;
    const anchoOriginal = tareasWrapper.offsetWidth;

    const anchoOriginalDescripcion = parseInt(getComputedStyle(descripciones[0]).width.replace("px", ""));
    
    document.onmousemove = function() {    
        
        tareasWrapper.style.width = `${anchoOriginal - (posicionInicial - event.clientX)}px`;
        root.style.setProperty("--ancho-descripcion", `${anchoOriginalDescripcion - (posicionInicial - event.clientX)}px`)
        
    }

    document.onmouseup =  function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }

});