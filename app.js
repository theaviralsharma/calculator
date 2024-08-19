const display = document.getElementById('display');

document.addEventListener('keydown', (event) => {
    if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === '/' || event.key === '*' || event.key === '-' || event.key === '+') {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}