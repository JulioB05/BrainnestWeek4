const displayPreviousValue = document.getElementById('previous_value');
const displayCurrentValue = document.getElementById('current_value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});

operatorButtons.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});