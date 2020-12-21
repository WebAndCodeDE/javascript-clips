'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    let sum1 = 0;
    sum1 = firstInteger + parseInt(secondInteger);
    console.log(sum1);

    const firstDecimal = 4.0;
    let sum2 = 0;
    sum2 = firstDecimal + parseFloat(secondDecimal);
    console.log(sum2);

    const firstString = 'HackerRank ';
    const str = firstString + secondString;
    console.log(str);
}

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}