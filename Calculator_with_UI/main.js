
const numbers = document.querySelectorAll('.operants');
const operators = document.querySelectorAll('.operators');
const screen = document.getElementById('result');
const dropping = document.getElementById('dropping');
const backspace = document.getElementById('backspace');
const total = document.getElementById('total');

function droppingScreen() {
    screen.textContent = '0';
}
dropping.addEventListener('click', droppingScreen);

function backspaceScreen() {
    const screenLength = screen.textContent.length;
    if (screenLength == 1) {
        screen.textContent = '0';
    } else {
        screen.textContent = screen.textContent.slice(0, screenLength - 1);
    }
}
backspace.addEventListener('click', backspaceScreen);


for (let number of numbers) {
    number.addEventListener('click', function () {
        if (screen.textContent != 0) {
            screen.textContent += number.textContent;
        }
        else {
            screen.textContent = number.textContent;
        }

    })
};


function calc (operator, a, b) {
    const CheckValid = (operator === undefined) || (a === undefined) || (b === undefined) || (typeof a !== 'number') ||
        (typeof b !== 'number');

    if (CheckValid) {
        return 'ERROR'
    } else {
        switch (operator) {
            case 'sum':
                return a + b;
            case 'min':
                return a - b;
            case 'multi':
                return a * b;
            case 'div':
                return a / b;
            case 'remOfDiv':
                return a % b;
            case 'exp':
                return a ** b;
            default:
                return 'unknown operation';
        }
    }
}



