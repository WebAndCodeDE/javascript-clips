"use strict";

const factorial = function (n) {
    let z = 1;
    
    for (let i = n; i > 0; i--) {
        z = z * i;
        
        console.log(`z = ${z}`);
    }
    return z;
}

let n = 4;
console.log(factorial(n));