const barraTareasBloc = document.getElementById("barraTareasBloc");
const tareasWrapper = document.getElementById("tareasWrapper");

barraTareasBloc.addEventListener("mousedown", function(evento) {

    let posicionInicial = event.clientX;
    const anchoOriginal = tareasWrapper.offsetWidth;
    console.log(anchoOriginal);
    
    console.log("Click");
    
    document.onmousemove = function() {    
        // console.log(`Diferencia: ${posicionInicial - event.clientX}`);
        tareasWrapper.style.width = `${anchoOriginal - (posicionInicial - event.clientX)}px`
        
    }

    document.onmouseup =  function() {
        console.log("Stop");
        document.onmousemove = null;
        document.onmouseup = null;
    }

});
