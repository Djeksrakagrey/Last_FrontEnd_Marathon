function Calk (operator, a, b) {
    const CheckValid = (operator === undefined) || (a === undefined) || (b === undefined) || (typeof a !== 'number') ||
        (typeof b !== 'number');

    const operations = {
        'sum': a + b,
        'sub': a - b,
        'multi': a * b,
        'div': a / b,
    }

    if (CheckValid) {
        console.log('Error');
    } else if (operator in operations) {
        console.log(operations[operator]);
    } else {
        console.log('unknown operation')
    }
}


(Calk('multi', 10, 5));








// function calc (operator, a,b) {
//     const CheckValid = (operator === undefined) || (a === undefined) || (b === undefined) || (typeof a !== 'number') ||
//         (typeof b !== 'number');
//
//     if (CheckValid) {
//       return 'ERROR'
//     } else if (operator === 'sum') {
//         return a + b;
//     } else if (operator === 'min') {
//         return a - b;
//     } else if (operator === 'multi') {
//         return a * b;
//     } else if (operator === 'div' && b !== 0) {
//         return a / b;
//     } else if (operator === 'remOfDiv') {
//         return a % b;
//     } else if (operator === 'exp') {
//         return a ** b;
//     } else {
//         return 'unknown operation';
//     }
// }
//
// console.log(calc( 'div', 10, 5));
//
//
//
//
// function calc1 (operator, a, b) {
//     const CheckValid = (operator === undefined) || (a === undefined) || (b === undefined) || (typeof a !== 'number') ||
//         (typeof b !== 'number');
//
//     if (CheckValid) {
//         return 'ERROR'
//     } else {
//         switch (operator) {
//             case 'sum':
//                 return a + b;
//             case 'min':
//                 return a - b;
//             case 'multi':
//                 return a * b;
//             case 'div':
//                 return a / b;
//             case 'remOfDiv':
//                 return a % b;
//             case 'exp':
//                 return a ** b;
//             default:
//                 return 'unknown operation';
//         }
//     }
// }
//
// console.log(calc1(  'sum',5,5));


