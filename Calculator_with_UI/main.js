
const numbers = document.querySelectorAll('.operants');
const operators = document.querySelectorAll('.operators');
const screen = document.getElementById('result');
const dropping = document.getElementById('dropping');
const backspace = document.getElementById('backspace');
const total = document.getElementById('total');

let firstNum = null;
let secondNum = null;
let operator = null;

function droppingScreen() {
    screen.textContent = '0';
    firstNum = null;
    secondNum = null;
    operator = null;
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


for (let symbol of operators) {
    symbol.addEventListener('click', function () {
        firstNum = screen.textContent;
        operator = symbol.textContent;
        screen.textContent = null;


    })
}

function calc () {
    secondNum = screen.textContent;
    // alert(firstNum);
    // alert(secondNum);
    // alert(operator);
    if (operator === '+') {
        screen.textContent = +firstNum + +secondNum;
    } else if (operator === '-') {
        screen.textContent = firstNum - secondNum;
    } else if (operator === '×') {
        screen.textContent = firstNum * secondNum;
    } else if (operator === '/' && secondNum !== 0) {
        screen.textContent = firstNum / secondNum;
    }
}

total.addEventListener('click', calc);






