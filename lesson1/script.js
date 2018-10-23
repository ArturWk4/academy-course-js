// write in console 'node script.js' for execute this program

let value = 33721;

function splitNumber(number) {
    let resultArray = [];
    for (; Math.floor(number) !== 0;) {
        resultArray.push(Math.floor(number % 10));
        number /= 10;
    }
    return resultArray;
}

function multiplyArrayElements(arr) {
    let result = 1;
    for(let i of arr) {
        result *= i;
    }
    return result;
}
function myPow(value, degree) {
    let result = 1;
    for(let i = 0; i < degree; ++i) {
        result *= value;
    }
    return result;
}
function getTwoFirstDigits(value) {
    let arr = splitNumber(value);
    arr.reverse();
    let result = [];
    for(let i = 0; i < 2; ++i) {
        result.push(arr[i]);
    }
    return result;
}
let newResult = multiplyArrayElements(splitNumber(value));
console.log('product of ' + value + ' digits = ' + newResult);
let resPower = myPow(newResult, 3);
console.log('Power of ' + newResult + ' in 3 degree = ' + resPower);
console.log('Two first digits of ' + resPower + ' = ' + getTwoFirstDigits(resPower));

