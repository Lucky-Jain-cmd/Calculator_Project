let currentDisplay = "";
function updateDisplay() {
    document.querySelector("#display").value = currentDisplay;
}
function appendValue(value) {
    currentDisplay += value;
    updateDisplay();
}
function clearDisplay() {
    currentDisplay = "";
    updateDisplay();
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay).toString();
    } catch {
        currentDisplay = "Error";
    }
    updateDisplay();
}
