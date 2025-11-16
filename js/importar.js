const importButton = document.getElementById("import");

importButton.addEventListener("click", importFile);

function importFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".xml";

    let file;

    input.onchange = e => { 
        file = e.target.files[0]; 
        
        const reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, "application/xml");

            const errorNode = doc.querySelector("parsererror");
            if (errorNode) {
                console.log("error while parsing");
            } else {
                cleanWorkstation();
                cargarWorkStation(doc);
            }

        }

    }

    input.click();
    
}

function cleanWorkstation() {
    
    tareasPorHacer = [];
    tareasCompletadas = [];

    tareas.innerHTML = "";
    textArea.innerHTML = "";

}

function cargarWorkStation(docs) {
    
    cargarTareasSinCompletar(docs);
    cargarTareasCompletadas(docs);
    cargarTextoNotepad(docs);
    
}

function cargarTareasSinCompletar (docs) {
    let tareasCargadasSinHacer = docs.getElementsByTagName("notDone")[0].childNodes;
    for (let index = 0; index < tareasCargadasSinHacer.length; index++) {
        const childs = tareasCargadasSinHacer[index].childNodes;
        
        if (childs.length == 1) {
            añadirTareaPorHacer(childs[0].innerHTML, "");
        } else {
            añadirTareaPorHacer(childs[0].innerHTML, childs[1].innerHTML)
        }
        
    }
}

function cargarTareasCompletadas (docs) {
    let tareasCargadasSinHacer = docs.getElementsByTagName("notDone")[0].childNodes;
    let tareasCargadasHechas = docs.getElementsByTagName("Done")[0].childNodes;

    for (let index = 0; index < tareasCargadasHechas.length; index++) {
        const childs = tareasCargadasHechas[index].childNodes;
        
        if (childs.length == 1) {
            añadirTareaPorHacer(childs[0].innerHTML, "");
        } else {
            añadirTareaPorHacer(childs[0].innerHTML, childs[1].innerHTML)
        }

        const tempButton = tareas.getElementsByClassName("tarea")[tareasCargadasSinHacer.length].getElementsByTagName("button")[0];
        tempButton.click();

    }
}

function cargarTextoNotepad(docs) {
    const texto = docs.getElementsByTagName("notepad")[0].childNodes;
    
    for (let index = 0; index < texto.length; index++) {
        const element = texto[index];
        textArea.innerHTML += element.outerHTML;
    }

}