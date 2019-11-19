let totalNumbers = 3;
let array = [];
let sum = 0;
let product = 1;
let totalSum = 0;
let result2 = 0;

while (array.length < totalNumbers) {
    let number = +prompt('введите элемент массива');

    if (Number.isNaN(number)) {
        alert('введите число');
    } else {
        array.push(number);
    }
}

console.log(array);

for (i = 0; i < array.length; i++) {

    if (array[i] > 0) {
        sum += array[i]; 
    }

    product *= array[i]; 
    totalSum += array[i];
}


// if (product >= totalSum) {
//     result2 = product+3;
// } else {
//     result2 = totalSum+3;
// }
result2 = Math.max(product, totalSum) + 3;

console.log(result2);

//макс(а*б*с, а+б+с) + 3