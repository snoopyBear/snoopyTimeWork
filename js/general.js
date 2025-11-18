const barraTareasBloc = document.getElementById("barraTareasBloc");
const barraBlocHora = document.getElementById("barraBlocHora");
const tareasWrapper = document.getElementById("tareasWrapper");
const cronometroWrapper = document.getElementById("cronometroWrapper");
const descripciones = document.getElementsByClassName("descripcion");
const root = document.documentElement;


barraTareasBloc.addEventListener("mousedown", function(evento) {

    tareasWrapper.style.minWidth = 'fit-content';
    let posicionInicial = event.clientX;
    const anchoOriginal = tareasWrapper.offsetWidth;
    const anchoOriginalDescripcion = parseInt(getComputedStyle(descripciones[0]).width.replace("px", ""));
    
    document.onmousemove = function() {    
        
        tareasWrapper.style.width = `${anchoOriginal - (posicionInicial - event.clientX)}px`;
        root.style.setProperty("--ancho-descripcion", `${anchoOriginalDescripcion - (posicionInicial - event.clientX)}px`)
        console.log(tareasWrapper.getBoundingClientRect().width);
    }

    document.onmouseup =  function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }

});


// barraBlocHora.addEventListener("mousedown", function(evento) {

    
//     let posicionInicial = event.clientX;
//     const anchoOriginal = cronometroWrapper.offsetWidth;
//     // const anchoOriginalDescripcion = parseInt(getComputedStyle(descripciones[0]).width.replace("px", ""));
    
//     document.onmousemove = function() {    
        
//         cronometroWrapper.style.width = `${anchoOriginal + (posicionInicial - event.clientX)}px`;
//         // root.style.setProperty("--ancho-descripcion", `${anchoOriginalDescripcion - (posicionInicial - event.clientX)}px`)
//         // console.log(tareasWrapper.getBoundingClientRect().width);
//     }

//     document.onmouseup =  function() {
//         document.onmousemove = null;
//         document.onmouseup = null;
//     }

// })