//1. Найти сумму только положительных из трех чисел

let totalNumbers = 3;
let array = [];
let sum = 0;

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
}

console.log(sum);

//2. Посчитать выражение: макс(а*б*с, а+б+с) + 3

let product = 1;
let totalSum = 0;
let result = 0;

for (i = 0; i < array.length; i++) {

    product *= array[i];
    totalSum += array[i];
}

// if (product >= totalSum) {
//     result = product+3;
// } else {
//     result = totalSum+3;
// }
result = Math.max(product, totalSum) + 3;

console.log(result);

//3. Определить, какой четверти принадлежит точка с координатами (х,у)

let x = +prompt('введите координату для Х');
let y = +prompt('введите координату для Y');
let quarter = '';

if (x > 0) {

    if (y > 0) {
        quarter = 'Точка с координатами (X,Y) пренадлежит 1-ой четверти.'
    } else if (y < 0) {
        quarter = 'Точка с координатами (X,Y) пренадлежит 4-ой четверти.'
    } 

} else if (y > 0) {
    quarter = 'Точка с координатами (X,Y) пренадлежит 2-ой четверти.'
} else if (y < 0) {
    quarter = 'Точка с координатами (X,Y) пренадлежит 3-ей четверти.'
} else if (x === 0) {

    if (y === 0) {
        quarter = 'Точка находится на пересечении координат (X,Y).' 
    }
}


console.log(quarter);

//4. Про min и max в массиве (все вычисления можно проводить в одном и том же цикле, т.е. 4 раза почти одно и то же писать не надо):
//- Найти минимальный элемент массива
//- Найти максимальный элемент массива
//- Найти индекс минимального элемента массива
//- Найти индекс максимального элемента массив

let randomNumber = 0;
let arr = [];

for (i=0; i < 10; i++) {
    randomNumber = Math.floor(Math.random()*50);
    arr.push(randomNumber);
}

console.log(arr);

let max = arr[0];
let min = arr[0];
let maxIndex = 0;
let minIndex = 0;

for (i = 1; i < arr.length; i++) {     

    if (max < arr[i]) {
        max = arr[i];
        maxIndex = i;
    }
    
    if (min > arr[i]) {
        min = arr[i];
        minIndex = i;
    }
}

console.log('Mаксимальный элемент массива: ' + max, 'минимальный элемент массива: ' + min);
console.log('Индекс max элемента массива:' + maxIndex, 'sиндекс min элемента массива: ' + minIndex);

//5. Посчитать сумму элементов массива с нечетными индексами

let sumElements = 0;

for (i = 0; i < arr.length; i++) {

    if (i%2 != 0) {
        sumElements += arr[i];
    }
}
console.log('Cумма элементов массива с нечетными индексами: ' + sumElements);