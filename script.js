// Obtiene el elemento de la pantalla de visualización por su ID
let display = document.getElementById('display');
// Agrega el valor al final de la pantalla de visualización
function appendToDisplay(value) {
    display.value += value;
}
// Limpia la pantalla de visualización
function clearDisplay() {
    display.value = '';
}
// Elimina el último carácter de la pantalla de visualización (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}
// Calcula el resultado de la expresión en la pantalla de visualización
function calculate() {
    try {
        display.value = eval(display.value);// evalua la expresión matemática yasigna el resultado al campo de visualización
    } catch (error) {
        display.value = 'Error';
    }
}
