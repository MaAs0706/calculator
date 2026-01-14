const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
} 

function calculate() {
   try {
        const expression = display.value;

        
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            throw new Error("Invalid characters");
        }

        const result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
}
}