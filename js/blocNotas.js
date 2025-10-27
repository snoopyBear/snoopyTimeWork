const textArea = document.getElementById("textArea");
const botonColor = document.getElementById("testColor");
const botonAgrandar = document.getElementById("testAgrandar");

const panelColores = document.getElementById("panelColores");
const mostrarPanelColores = document.getElementById("mostrarPanelColores");

const mostrarPanelTamanyo = document.getElementById("setFontSize");
const panelFuentes = document.getElementById("panelFuentes");

const colores = [["#000101", "#444444", "#656565", "#999999", "#b7b7b7", "#cbcbcb", "#d9d9d9", "#efefef", "#f4f4f4", "#fdfdfd"],
                ["#970201", "#fe0000", "#fd9800", "#fefe02", "#01ff00", "#37761e", "#4988e8", "#0000f9", "#9c01fd", "#fd00ff"],
                ["#e7b8b0", "#fac9c9", "#f9e5cb", "#fff1cf", "#d8e8d2", "#d4e1e5", "#c5d9f4", "#d1e3f6", "#d9d2e8", "#ebd1dc"],
                ["#dd806a", "#e99799", "#f7c99c", "#fee49b", "#d8e8d2", "#a0c3c7", "#a6bdf3", "#9fc2eb", "#b0a7d3", "#d6a3ba"],
                ["#ca4123", "#e26666", "#f2b16a", "#fcda63", "#90c57c", "#75a4ab", "#6d9ceb", "#71a8dc", "#8b7cc0", "#be7a9f"],
                ["#a71d01", "#cc0101", "#e59039", "#f0c032", "#6ca650", "#41838e", "#3879d6", "#3a85c3", "#664fa7", "#a44d77"],
                ["#841e0a", "#950000", "#b55d08", "#bd9002", "#37761e", "#144f5e", "#1257cc", "#095591", "#351b76", "#751845"],
                ["#5a0f02", "#640001", "#753f06", "#7d5f00", "#37761e", "#0b2f3a", "#1f4487", "#073663", "#1f124e", "#4b112f"]];

const tamanyos = ["8", "9", "10", "11", "12", "14", "18", "24", "30", "36", "48", "60", "72", "96"];

mostrarPanelColores.onclick = function(){
    if (panelColores.style.display == "block"){
        panelColores.style.display = "none";
    } else {
        panelColores.style.display = "block";
    }
}

mostrarPanelTamanyo.onclick = function(){
    if (panelFuentes.style.display == "grid"){
        panelFuentes.style.display = "none";
    } else {
        panelFuentes.style.display = "grid";
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

tamanyos.forEach(tamanyo => {
    let boton = document.createElement("button");
    boton.setAttribute("class", "fuente");
    boton.value = tamanyo;
    boton.innerText = tamanyo;

    boton.onclick = function() {
        cambiarTamanyoTexto(this);
    };

    panelFuentes.appendChild(boton);

})

// function cambiarColorTexto(boton){
//     const selection = window.getSelection();

//     if (selection.rangeCount > 0) {
        
//         const range = selection.getRangeAt(0);
        
//         const span = document.createElement('span');
//         span.style.color = boton.value;
//         span.innerHTML = selection.toString().replace(/\n/g, "<br>");
        
//         range.deleteContents();
//         range.insertNode(span);

//     }

//     panelColores.style.display = "none";

// }

function cambiarTamanyoTexto(boton) {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        
        const range = selection.getRangeAt(0);
        
        const span = document.createElement('span');
        span.style.fontSize = `${boton.value}px`;
        span.innerHTML = selection.toString().replace(/\n/g, "<br>");
        span.style.color = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('color');
        
        range.deleteContents();
        range.insertNode(span);

    }

    panelFuentes.style.display = "none";
}

function cambiarColorTexto(boton) {
    const selection = window.getSelection();
        if (!selection.isCollapsed) {
            
            const nodes = runScanNodes(selection);

            let numSpan = 0;
            let numTexto = 0;
            let textoTotal = selection.toString()

            let listaNodosValidos = [];

            for (let index = 0; index < nodes.length; index++) {
                const element = nodes[index];
                if (element.nodeName == "SPAN") {
                    numSpan++;
                    listaNodosValidos.push(element);
                    index++;
                } else if (element.nodeName == "#text"){
                    numTexto++;
                    listaNodosValidos.push(element);
                }
                

            }
            

            if ((numSpan == 1 && numTexto == 0) || (numTexto == 1 && numSpan == 0)) {

                for (let index = 0; index < nodes.length; index++) {

                    const element = nodes[index];

                    if (element.nodeName == "SPAN" || element.nodeName == "#text") {
                        
                        generarSpanUnico(selection, element)

                        limpieza();
                        return;
                    }
                    
                }
            }

            console.log(listaNodosValidos);

            for (let index = 0; index < listaNodosValidos.length; index++) {
                const element = listaNodosValidos[index];
                let textoComun;
                

                if (element.nodeName == "SPAN" || element.nodeName == "#text") {

                    const span = document.createElement("span");
                    span.style.color = boton.value;

                    if (element.nodeName == "SPAN") {
                        span.style.fontSize = element.style.fontSize;
                    } else {
                        span.style.fontSize = "16px";
                    }
                    
                    if (element.nodeName == "SPAN") {
                        textoComun = obtenerTextoComun(element.innerText, textoTotal);
                    } else {
                        textoComun = textoComun = obtenerTextoComun(element.data, textoTotal)
                    }

                    span.innerText = textoComun;

                    if (index == 0){

                        // span.style.fontSize = element.style.fontSize;
                        
                        if (element.nodeName == "SPAN") {
                            element.innerText = element.innerText.replace(new RegExp(`${textoComun}$`), "");
                        } else {
                            element.data = element.data.replace(new RegExp(`${textoComun}$`), "");
                        }

                        // element.innerText = element.innerText.replace(new RegExp(`${textoComun}$`), "");
                        textoTotal = textoTotal.replace(new RegExp(`^${textoComun}`), "");
                        
                        element.parentNode.insertBefore(span, element.nextSibling);
                        
                    } else if (index == listaNodosValidos.length -1 ){

                        if (element.nodeName == "SPAN") {
                            element.innerText = element.innerText.replace(new RegExp(`^${textoComun}`), "");
                        } else {
                            element.data = element.data.replace(new RegExp(`^${textoComun}`), "");
                        }

                        // element.innerText = element.innerText.replace(new RegExp(`^${textoComun}`), "");
                        textoTotal = textoTotal.replace(new RegExp(`^${textoComun}`), "");
                        
                        element.parentNode.insertBefore(span, element);
                        
                    } else {
                        
                        textoTotal = textoTotal.replace(textoComun, "");

                        element.parentNode.insertBefore(span, element)
                        element.parentNode.removeChild(element);

                    }
                }

            }

        }

    limpieza();
    panelColores.style.display = "none";
}

function generarSpanUnico(selection, element){ // Genera 1 solo span cuando esté reemplazando 1 solo tag
    let spanBool;

    if (element.nodeName == "SPAN"){
        spanBool = true;
    } else {
        spanBool = false;
    }

    
    let textContent = (spanBool) ? element.innerText : element.data.replace("\n", "");
    let selectionStart = selection.anchorOffset;
    let selectionEnd = selection.focusOffset;

    let beforeText = textContent.substring(0, selectionStart);
    let selectedText = textContent.substring(selectionStart, selectionEnd);
    let afterText = textContent.substring(selectionEnd);

    const beforeSpan = document.createElement("span");
    beforeSpan.innerText = beforeText;
    beforeSpan.style.fontSize = (spanBool) ? element.style.fontSize : "16px";

    const selectedSpan = document.createElement("span");
    selectedSpan.innerText = selectedText;
    selectedSpan.style.fontSize = (spanBool) ? element.style.fontSize : "16px";
    selectedSpan.style.color = "red";

    const afterSpan = document.createElement("span");
    afterSpan.innerText = afterText;
    afterSpan.style.fontSize = (spanBool) ? element.style.fontSize : "16px";

    element.parentNode.insertBefore(beforeSpan, element);
    element.parentNode.insertBefore(selectedSpan, element);
    element.parentNode.insertBefore(afterSpan, element);

    element.parentNode.removeChild(element);
}

function runScanNodes(selection){
    const range = selection.getRangeAt(0);

    let start = range.startContainer;
    let end = range.endContainer;

    let commonAncestor = range.commonAncestorContainer;
    let nodes = [];
    let node;

    for (node = start.parentNode; node; node = node.parentNode)
    {
        nodes.push(node);
        if (node == commonAncestor)
            break;
    }
    nodes.reverse();

    for (node = start; node; node = getNextNode(node))
    {
        nodes.push(node);
        if (node == end)
            break;
    }

    return nodes;

}

function getNextNode(node)
    {
        if (node.firstChild)
            return node.firstChild;
        while (node)
        {
            if (node.nextSibling)
                return node.nextSibling;
            node = node.parentNode;
        }
    }

function obtenerTextoComun(str1, str2) {
    let contador = 0;
    let textoComun = "";            

    for (let index = 0; index < str1.length; index++) {
        const letra = str1[index];
        if (letra == str2[contador]) {
            textoComun += letra;
            contador++;
        }            
    }

    return textoComun;

}

function limpieza(){
    
    for (let index = 0; index < textArea.childNodes.length; index++) {
        if (textArea.childNodes[index].innerText || textArea.childNodes[index].data) {
            
        } else {
            textArea.removeChild(textArea.childNodes[index])
        }
    }
    
    
}