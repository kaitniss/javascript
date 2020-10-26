/*
    При выполнении домашнего задания используйте только те конструкции,
    которые есть в уроке.

    TASK 0:

    Напишите функцию sum(c,t), которая возвращает результат суммы c,t

*/
console.log('Task 0. Напишите функцию sum(c,t), которая возвращает результат суммы c,t');

let c = getNumber(10);
let t = getNumber(10);
console.log(c, t);

function sum(c, t) {
    return c + t;
}
let sumResult = sum(c, t);
console.log(sumResult);

/* 
    TASK 1:

    Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

*/
console.log('Task 1. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b');

let a = getNumber(10);
let b = getNumber(10);
console.log('a = ' + a, ', b = ' + b);

function min(a, b) {
    if (a < b) {
        return console.log('Меньшее число a = ' + a);
    } else {
        return console.log('Меньшее число b = ' + b);
    }
}
min(a, b);

/* 
    TASK 2:

    Напишите функцию pow(x,n), которая возвращает x, в степени n

*/
console.log('Task 2. Напишите функцию pow(x,n), которая возвращает x, в степени n');

let x = getNumber(10);
let n = getNumber(10);
console.log('x = ' + x, ', степень n = ' + n);

function pow(x, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res = res * x;
    }
    return res;
}
let resultPow = pow(x,n);
console.log(x + ' в степени ' + n + ' = ' + resultPow);

/* 
    TASK 3:

    Напишите функцию, которая принимает число,
    и возвращает строку "четное" или "нечетное".

*/
console.log('Task 3. Напишите функцию, которая принимает число, и возвращает строку "четное" или "нечетное"');

let num = getNumber(10);
console.log('На проверку выпало число = ' + num);

function parityCheck(num) {
    let message;
    if (num % 2 == 0) {
        message = num + " - четное число";
    } else {
        message = num + " - нечетное число";
    }
    console.log(message);
    return message;
}
parityCheck(num);

/* 
    TASK 4:

    Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента 
    и возвращать строку вида "rgb(23,100,134)". 
    Если какой-либо из аргументов не задан: например, третий:
    мы вызываем функцию getColor(23,100), в таком случае мы должны
    получить строку "rgb(23,100,0)"

*/

console.log('Task 4. Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента и возвращать строку вида "rgb(23,100,134)');

let red = 23;
let green = 100;
let blue = 134;

function getColor(r, g, b) {
    if (r) {
        red = r;
    } else {
        red = 0;
    }
    if (g) {
        green = g;
    } else {
        green = 0;
    }
    if (b) {
        blue = b;
    } else {
        blue = 0;
    }
    return console.log("rgb(" + red + "," + green + "," + blue + ")");
}
getColor(red, green, blue);
getColor(red, green);
getColor(red, blue);
getColor(green, blue);

/* 
    TASK 5:

    Напишите 2 функции:

    Первая функция squareNumber(num) должна принимать число, и возвращать квадрат этого числа

    Вторая функция запрашивает у пользователя число от 18 до 50.
    Если пользователь ввел НЕ число, то сделайте ему одно замечание,
    если число, то вызовете функцию squareNumber передав в нее это самое число.
    Необходимо вывести результат пользователю (Либо замечание, либо квадрат числа).  

*/
console.log('Task 5.1. Напишите функцию squareNumber(num), которая должна принимать число, и возвращать квадрат этого числа');
// num получали выше в таске 3 рандомайзером;
console.log('На проверку выпало число = ' + num);

function squareNumber(num) {
    return num * num;
}
let resultSquare = squareNumber(num);
console.log(resultSquare);

console.log('Task 5.2. Запросить ввод числа от 18 до 50. Если пользователь ввел НЕ число, то сделайте ему одно замечание, если число, то вызовете функцию squareNumber передав в нее это самое число. Вывести результат юзеру');


let userInput = parseFloat(prompt('Введите целое число от 18 до 50',''));

function squareWithCheck(userInput) {
    if (isNaN(userInput)) {
        console.log(userInput + ' not number');
        alert('Вы ввели не числовое значение');
    } else if (!(userInput  >= 18 && userInput <= 50)) {
        console.log('Пользователь ввел число вне заданного диапазона: ' + userInput);
        alert('Вы ввели значение вне диапазано 18 - 50');
    } else {
        console.log("число " + userInput);
        alert(squareNumber(userInput));
    }
}
squareWithCheck(userInput);

/* генератор рандомных чисел для переменных */
function getNumber(multiplier) {
    let numRandom = Math.floor(Math.random() * multiplier);
    return numRandom;
}