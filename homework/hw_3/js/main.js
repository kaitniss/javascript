/*
    Task 1:

    Напишите результат сравнения рядом с выражением в виде комментария.
    Необходимо выполнить это задание без использования console.log()
    Данные для сравнения:

    "42" == 42
    "0" == 0
    "0" == false
    "true" == true
    true == (1 == "1")

    "42" === 42
    "0" === 0
    "0" === false
    "true" === true
    true === (1 === "1")
*/

// == равенство, сначала приводит операнды к одному типу, потом применчет строгое сравнение
"42" == 42; // true, строка 42 становится числом 42
"0" == 0; // true, числовое преобразование и сравнивает числа
"0" == false; // true, приводит 0 к числу а false к 0
"true" == true; // false,  правый true приводится к 1, а левый становится NaN (тн "true" не является числом)
true == (1 == "1"); // true, (1 == "1") true, true==true

//===строгое равенство, проверка без приведения типов =>  сравниваем и ТИПЫ и ЗНАЧЕНИЕ
"42" === 42; // false, string и number
"0" === 0; // false,  сравниваются разные типы (string, number)
"0" === false; // false,  сравниваются разные типы (string , boolean)
"true" === true; // false,  string boolean
true === (1 === "1"); // false (boolean true (number string => false) true != false, хоть и один тип => false



/* 
    Task 2:

    Переменная a = 'foo' , а переменная b = 'bar'
    Чему будет равен результат выражения: a+ +b 
    
    ps: два плюса - это не опечатка

*/
let a = 'foo';
let b = 'bar';
let c = a+ +b;
// два оператора + : унарный + и бинарный +, унарный приоритетнее и вычисляется первым => начинаем с +b
// +b - попытка превратить содержимое переменной в число, но так как в строке буквы (а не число) => получаем NaN
// а  осталась  строкой foo
//вычисляем c = "foo" + NaN  => "fooNaN" - бинарный плюс и первый аршумент является строкой => NaN тоже
// преобразуетсяв строку и происходит конкатенация строк

/*
    Task 3:

    Напишите результат сравнения следующих выражений :

    "ананас" > "яблоко"
    undefined == null  
    undefined === null 

    Необходимо выполнить это задание без использования console.log()

*/
"ананас" > "яблоко"; // false
// достаточно сравнить 1ые буквы (одинаковый решистр) а и я - я находится дальше по порядку => имеет больший код в
// юникоде

undefined == null; // true
// == нестрогое равенство, и то, и то означает отсутствие значения, типы не проверяются

undefined === null; // false
// т к === строгое равенство, учитываются типы значений, а у нулл и undefined они разные


/*
    Task 4:

    Создайте свою конструкцию УСЛОВИЕ
    Минимальное количество условий в одной конструкции: 5

*/
// Рандомайзер баллов за егэ
let score = Math.floor(Math.random() * Math.floor(101));
let testScore = ("Баллы за егэ: " + score);
console.log(testScore);

// Перевод тестовых баллов в школьную оценку
if (score >= 72) {
    console.log("Отлично");
} else if (score >= 57) {
    console.log("Хорошо");
} else if (score >= 36 ) {
    console.log("Удовл.");
} else if (score >= 1) {
    console.log("Неуд");
} else if (score = 0) {
    console.log("Epic Fail");
} else {
    console.log("Error?");
}

/*
    Task 5:

    Созданную вами конструкцию из задания номер 4, запишите с помощью тернарного оператора

*/
let score2 = Math.floor(Math.random() * Math.floor(101));
let testScore2 = ("Баллы за егэ: " + score2);
console.log(testScore2);

let result;

score2 >= 72 ? result = console.log("Отлично") :
    score2 >= 57 ? result = console.log("Хорошо") :
        score2 >= 36  ? result = console.log("Удовл.") :
            score2 >= 1 ? result = console.log("Неуд.") :
                score2 = 0 ? result = console.log("Epic Fail") :
                    result = console.log("Error?");

/*
    Task 6:
    Загадайте 5 чисел от 1 до 100,
    а затем запросите у пользователя одно число в этом диапазоне.
    При КАЖДОМ совпадении числа выводите сообщение в МОДАЛЬНОМ окне:
    "Вы угадали число". Если пользователь не угадал, то выводите сообщение:
    "Вы не угадали. Попробуйте ещё раз!"

    В задании необходимо использовать конструкцию switch/case.
*/

const numbers = []
while (numbers.length < 5) {
    const number = Math.round(Math.random() * 100)
    if (!numbers.includes(number)) numbers.push(number)
}

const numb1 = numbers[0]
const numb2 = numbers[1]
const numb3 = numbers[2]
const numb4 = numbers[3]
const numb5 = numbers[4]
console.log(numbers);

let guessNumb = +prompt("Введите число:");
switch(guessNumb) {
    case numb1:
        onSuccess();
        break;
    case numb2:
        onSuccess();
        break;
    case numb3:
        onSuccess();
        break;
    case numb4:
        onSuccess();
        break;
    case numb5:
        onSuccess();
        break;
    default:
        alert("Вы не угадали. Попробуйте ещё раз!");
        location.reload();
}

function onSuccess() {
    alert("Вы угадали число");
    console.log(guessNumb);
}