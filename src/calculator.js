
function isValid(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number')
        return false;
    return true;
}

function add(a, b) {
    if(isValid(a, b))
        return a + b;
    return "Invalid arguements";
}

function subtract(a, b) {
    if(isValid(a, b))
        return a - b;
    return "Invalid arguements";
}

function multiply(a, b) {
    if(isValid(a, b))
        return a * b;
    return "Invalid arguements";
}

function divide(a, b) {
    if(isValid(a, b))
        return a / b;
    return "Invalid arguements";
}

const calculator = {
    add, subtract, multiply, divide
}
export default calculator;