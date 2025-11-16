const exportButton = document.getElementById("export");

exportButton.addEventListener("click", exportarWorkStation);

function exportarWorkStation() {

    const xmlDoc = document.implementation.createDocument(null, "workingStationFile", null);
    
    const todos = xmlDoc.createElement("todos");
    const notDone = xmlDoc.createElement("notDone");
    const done = xmlDoc.createElement("Done");
    const notepad = xmlDoc.createElement("notepad");

    transformarListaTareas(xmlDoc, notDone, tareasPorHacer);
    transformarListaTareas(xmlDoc, done, tareasCompletadas);
    transformarNotePad(xmlDoc, notepad);

    todos.appendChild(notDone);
    todos.appendChild(done);

    xmlDoc.documentElement.appendChild(todos);
    xmlDoc.documentElement.appendChild(notepad);

    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc);

    descargarXML(xmlString);
}

function transformarListaTareas(xmlDoc, elemento, lista) {
    
    for (let index = 0; index < lista.length; index++) {
        
        const todo = xmlDoc.createElement("todo");
        const title = xmlDoc.createElement("title");
        const descripcion = xmlDoc.createElement("descripcion");

        title.textContent = lista[index].childNodes[0].childNodes[0].innerText;
        todo.appendChild(title);
        try {
            descripcion.textContent = lista[index].childNodes[0].childNodes[1].innerText;
            todo.appendChild(descripcion);
        } catch {
            
        }

        elemento.appendChild(todo);
        
    }
}

function transformarNotePad (xmlDoc, notepad) {
    const childNodes = textArea.childNodes;
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeName === "SPAN") {
            const span = xmlDoc.createElement("span");
            
            if (element.style.color) {
                span.setAttribute("color", element.style.color);
            }
            if (element.style.fontSize) {
                span.setAttribute("fontSize", element.style.fontSize);
            }

            span.textContent = element.innerText;
            notepad.appendChild(span);
        } else if (element.nodeType === Node.TEXT_NODE) {
            const textNode = xmlDoc.createElement("text");
            textNode.textContent = element.data.trim();
            notepad.appendChild(textNode);
        }
    }
}

function descargarXML(xmlString) {
    const blob = new Blob([xmlString], { type: 'text/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'archivo.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}