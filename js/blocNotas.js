const textArea = document.getElementById("textArea");
const botonColor = document.getElementById("testColor");
const botonAgrandar = document.getElementById("testAgrandar");

const colores = [["#000101", "#444444", "#656565", "#999999", "#b7b7b7", "#cbcbcb", "#d9d9d9", "#efefef", "#f4f4f4", "#fdfdfd"],
                ["#970201", "#fe0000", "#fd9800", "#fefe02", "#01ff00", "#37761e", "#4988e8", "#0000f9", "#9c01fd", "#fd00ff"],
                ["#e7b8b0", "#fac9c9", "#f9e5cb", "#fff1cf", "#d8e8d2", "#d4e1e5", "#c5d9f4", "#d1e3f6", "#d9d2e8", "#ebd1dc"],
                ["#dd806a", "#e99799", "#f7c99c", "#fee49b", "#d8e8d2", "#a0c3c7", "#a6bdf3", "#9fc2eb", "#b0a7d3", "#d6a3ba"],
                ["#ca4123", "#e26666", "#f2b16a", "#fcda63", "#90c57c", "#75a4ab", "#6d9ceb", "#71a8dc", "#8b7cc0", "#be7a9f"],
                ["#a71d01", "#cc0101", "#e59039", "#f0c032", "#6ca650", "#41838e", "#3879d6", "#3a85c3", "#664fa7", "#a44d77"],
                ["#841e0a", "#950000", "#b55d08", "#bd9002", "#37761e", "#144f5e", "#1257cc", "#095591", "#351b76", "#751845"],
                ["#5a0f02", "#640001", "#753f06", "#7d5f00", "#37761e", "#0b2f3a", "#1f4487", "#073663", "#1f124e", "#4b112f"]];

const panelColores = document.getElementById("panelColores");
const mostrarPanel = document.getElementById("mostrarPanel");

mostrarPanel.onclick = function(){
    if (panelColores.style.display == "block"){
        panelColores.style.display = "none";
    } else {
        panelColores.style.display = "block";
    }
}

colores.forEach(fila => {

    let filaDiv = document.createElement("div");
    filaDiv.setAttribute("class", "filaColores");

    fila.forEach(color => {
        let boton = document.createElement("button"); 
        boton.setAttribute("class", "color");
        boton.style.backgroundColor = color;
        boton.value = color;
        boton.onclick = function () {
            cambiarColorTexto(this);
        };

        filaDiv.appendChild(boton);

    });

    panelColores.appendChild(filaDiv);

});

function cambiarColorTexto(boton){
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        
        const range = selection.getRangeAt(0);
        
        const span = document.createElement('span');
        span.style.color = boton.value;
        span.innerHTML = selection.toString().replace(/\n/g, "<br>");

        
        range.deleteContents();
        range.insertNode(span);

    }

    panelColores.style.display = "none";

}

// botonAgrandar.addEventListener("click", function() {
//     const selection = window.getSelection();
    
//     if (selection.rangeCount > 0) {
//         const range = selection.getRangeAt(0);
//         const selectedText = range.toString();
        
//         const span = document.createElement('span');
//         span.style.fontSize = "24px";
//         span.textContent = selectedText;
        
//         range.deleteContents();
//         range.insertNode(span);
//     }
// });