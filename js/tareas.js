let mostrarPorHacer = document.getElementById("porHacer");
let mostrarCompletadas = document.getElementById("completadas");

const inputTarea = document.getElementById("inputTarea");
const botonAñadir = document.getElementById("añadirTarea");
const tareas = document.getElementById("tareas");
const añadirDescripcion = document.getElementById("añadirDescripcion");
const inputDescripcion = document.getElementById("descripcion");

const tareaFocus = document.getElementById("tareaFocus");

const tareasPorHacer = [];
const tareasCompletadas = [];

const iconos = document.getElementsByClassName("icon");

añadirDescripcion.onclick = function () {
    añadirDescripcion.style.display = "none";
    inputDescripcion.style.display = "block";
}

mostrarPorHacer.onclick = function (){
    tareas.innerHTML = "";

    tareasPorHacer.forEach(element => {
        tareas.appendChild(element);
    });

    mostrarCompletadas.style.backgroundColor = 'transparent';
    mostrarCompletadas.style.border = 'border: 2px solid #3F3F46';
    mostrarPorHacer.style.backgroundColor = '#3F3F46';
    mostrarPorHacer.style.border = '2px solid #3F3F46';

    inputTarea.style.display = 'block';
    añadirDescripcion.style.display = 'block';
    botonAñadir.style.display = 'block';

}

mostrarCompletadas.onclick = function (){
    tareas.innerHTML = "";

    tareasCompletadas.forEach(element => {
        element.getElementsByTagName("img")[0].src = "svg/bold_checkbox.svg"        
        tareas.appendChild(element);
    });

    mostrarPorHacer.style.backgroundColor = 'transparent';
    mostrarPorHacer.style.border = 'border: 2px solid #3F3F46';
    mostrarCompletadas.style.backgroundColor = '#3F3F46';
    mostrarCompletadas.style.border = '2px solid #3F3F46';

    inputTarea.style.display = 'none';
    inputDescripcion.style.display = 'none';
    añadirDescripcion.style.display = 'none';
    botonAñadir.style.display = 'none';

}

function tareaCompletada(boton){
    const tarea = boton.parentNode;
    const tareas = tarea.parentNode;
    tareas.removeChild(tarea);

    tareasPorHacer.pop(tarea);

    tarea.removeChild(tarea.children[1]);

    tareasCompletadas.push(tarea);

}

function focustTarea(textoDiv) {
    const titulo = textoDiv.getElementsByTagName("h1")[0].innerText;
    
    let descripcion;

    try {
        descripcion = textoDiv.getElementsByTagName("p")[0].innerText;
    } catch (error) {
        descripcion = "Sin descripción";
    }


    tareaFocus.style.display = 'block';

    for (let index = 0; index < iconos.length; index++) {
        const element = iconos[index];
        element.style.display = 'none';
    }

    tareaFocus.getElementsByTagName("h1")[0].innerText = titulo;
    tareaFocus.getElementsByTagName("p")[0].innerText = descripcion;
}

tareaFocus.onclick = function () {
    tareaFocus.style.display = 'none';
    for (let index = 0; index < iconos.length; index++) {
        const element = iconos[index];
        element.style.display = 'inline';
    }
}

botonAñadir.onclick = function () {
    const tarea = document.createElement("div");
    tarea.setAttribute("class", "tarea");

    const texto = document.createElement("div");
    texto.setAttribute("class", "texto");
    texto.setAttribute("onclick", "focustTarea(this)")

    const titulo = document.createElement("h1");
    titulo.innerHTML = `<img class="icon" src="svg/bold_square.svg" alt="Checkbox" width="10" height="10" style="filter: brightness(0) invert(1);" />
        ${inputTarea.value}`;
    texto.appendChild(titulo);

    if (inputDescripcion.value != null && inputDescripcion.value != "") {
        const descripcion = document.createElement("p");
        descripcion.innerText = inputDescripcion.value;
        texto.appendChild(descripcion);
    }

    tarea.appendChild(texto);
    tarea.innerHTML += `<button class="completar" onclick="tareaCompletada(this)">Completada</button>`

    tareas.appendChild(tarea);
    inputTarea.value = "";
    inputDescripcion.value = "";

    tareasPorHacer.push(tarea);

}