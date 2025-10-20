const textArea = document.getElementById("textArea");
const botonTest = document.getElementById("testBlocNotas");

botonTest.addEventListener("click", function() {
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        
        const span = document.createElement('span');
        span.style.color = 'red';
        span.textContent = selectedText;
        
        range.deleteContents();
        range.insertNode(span);
    }

});