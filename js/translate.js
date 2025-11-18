const tempButton = document.getElementById("temp");

tempButton.addEventListener("click", translateSite)

async function translateSite() {

    const importButton = document.getElementById("import");
    const exportButton = document.getElementById("export");
    const settingsButton = document.getElementById("settings");

    const showNotDone = document.getElementById("porHacer");
    const showDone = document.getElementById("completadas");

    const tareasTitle = document.getElementById("tareasTitle");

    const inputTarea = document.getElementById("inputTarea");
    const addTask = document.getElementById("añadirTarea");
    const addDescription = document.getElementById("añadirDescripcion");
    const inputDescription = document.getElementById("descripcion");

    const markAsCompleted = document.getElementsByClassName("completar");

    const sizeButton = document.getElementById("setFontSize");
    const colorButton = document.getElementById("mostrarPanelColores");

    const hourButton = document.getElementById("elegirHora");
    const stopwatchButton = document.getElementById("elegirReloj");
    const countdownButton = document.getElementById("elegirCuentaAtras");

    const startStopwatch = document.getElementById("startReloj");
    const stopStopwatch = document.getElementById("pararReloj");
    const restartStopwatch = document.getElementById("reiniciarReloj");

    const startCountdown = document.getElementById("startCuentaAtras");
    const stopCountdown = document.getElementById("pararCuentaAtras");
    const restartCountdown = document.getElementById("reiniciarCuentaAtras");

    fetch("../languages/en.json")
        .then(res => res.json())
        .then(data => {
            importButton.lastChild.nodeValue = data.topNavButtons[0];
            exportButton.lastChild.nodeValue = data.topNavButtons[1];
            settingsButton.lastChild.nodeValue = data.topNavButtons[2];

            showNotDone.lastChild.nodeValue = data.todos.topButtons[0];
            showDone.lastChild.nodeValue = data.todos.topButtons[1];

            tareasTitle.innerText = data.todos.title;

            inputTarea.placeholder = data.todos.createTask[0];
            addTask.innerText = data.todos.createTask[1];
            addDescription.innerText = data.todos.createTask[2];
            inputDescription.placeholder = data.todos.createTask[3];

            for (let index = 0; index < markAsCompleted.length; index++) {
                markAsCompleted[index].innerText = data.todos.completed;
            }

            sizeButton.innerText = data.notepad.topButtons[0];
            colorButton.innerText = data.notepad.topButtons[1];

            hourButton.innerText = data.hour.topButtons[0];
            stopwatchButton.innerText = data.hour.topButtons[1];
            countdownButton.innerText = data.hour.topButtons[2];

            startStopwatch.innerText = data.hour.buttons[0];
            stopStopwatch.innerText = data.hour.buttons[1];
            restartStopwatch.innerText = data.hour.buttons[2];

            startCountdown.innerText = data.hour.buttons[0];
            stopCountdown.innerText = data.hour.buttons[1];
            restartCountdown.innerText = data.hour.buttons[2];

        });

}