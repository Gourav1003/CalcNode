let currentInput = '';

function appendToResult(value) {
    currentInput += value.toString() ;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('result').value = currentInput;
    } catch (error) {
        // document.getElementById('result').value = 'Error';
    }
}
