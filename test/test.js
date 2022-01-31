const capitalLetter = 'M';
const maxLengthString = 10;

function showVerticalMessage(str) {
    let changeStr = '';
    if (str[0] === 'м') {
        str = capitalLetter + str.slice(1);
    }

    if (str.length > maxLengthString) {
        changeStr = str.slice(0, maxLengthString);
    } else {
         changeStr = str;
    }

    for (let char of changeStr) {
        console.log(char);
    }
}

showVerticalMessage('марафонПоследний');








// function truncate(str, maxlength) {
//
//     if (str.length >= maxlength) {
//         return str.slice(0, maxlength - 1) + '...' ;
//     } else {
//         return str;
//     }
//
// }
//
// console.log(truncate('Hello World', 12));

// // function chekSpam(str) {
// //
// //     let lowerStr = str.toLowerCase()
// //
// //     if (lowerStr.includes('viagra') ||
// //         lowerStr.includes('xxx')) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
//
// console.log(chekSpam('buy viAgRa now'));
// console.log(chekSpam('free xXXxx'));
// console.log(chekSpam('innocent rabbit'));

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(ucFirst('vova') == 'Vova');

// let i = 0;
// while ( i < 3) {
//     console.log( `number ${i}!` );
//     i++;
// }
