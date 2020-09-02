/*
    Task 1:

    Необходимо создать информацию о себе, используя переменные, в которых будет:
    -ваше имя,
    -ваш возраст,
    -поле с вашим статусом о семейном положении, замужем/женаты (Либо истина , либо ложь)
    -по аналогии с предыдущим, поле с детьми

    Также необходимо определить тип данных всех ваших полей и вывести результат в консоль
*/
let myInfo = {
    name: 'Elliot Esina',
    age: 27,
    status: false,
    hasChild: false,
};

function meet(whoisInfo) {
    let name = whoisInfo.name;
    let age = whoisInfo.age;
    let marriage = (whoisInfo.status == false) ? 'не замужем' : 'в браке';
    let children = (whoisInfo.hasChild == false) ? 'нет' : 'есть';
    document.getElementById("person").innerHTML =
        "Имя: " + name + "<br>Возраст: " + age + "<br> Семейное положение: " + marriage + "<br> Дети: " + children;
    
    console.log("Name: " + name + "; type - " + typeof name);
    console.log("Age: " + age + "; type - " + typeof age);
    console.log("myInfo.status: " + myInfo.status + "; type - " + typeof myInfo.status);
    console.log("Marriage: " + marriage + "; type - " + typeof marriage);
    console.log("myInfo.hasChild: " + myInfo.hasChild + "; type - " + typeof myInfo.hasChild);
    console.log("Children: " + children + "; type - " + typeof children);
};


/*
    Task 2:
    Напишите скрипт, который находит площадь прямоугольника
    -высота 23см,
    -шириной 10см
    Каждая сущность должна находиться в своей переменной
*/
/*
    Task 3:
    Напиши скрипт, который находит объем цилиндра
    -высота 10м
    -площадь основания 4м
    Каждая сущность должна находиться в своей переменной
*/
let rectangle = {
    title: 'Rectangle',
    height: 23,
    width: 10
};

let cylinder = {
        title: 'Cylinder',
        height: 10,
        baseArea: 4
};

let area, capacity;
   
function calc(figure, target) {
    if (figure === rectangle) {
        let heightRectangle = rectangle.height;
        let widthRectangle = rectangle.width;
        if (target === area) {
            let area = heightRectangle * widthRectangle;
            document.getElementById("a").innerHTML =
                "Площадь прямоугольника: " + area;
            console.log(typeof area + " " + area);
        }
    } else { //    (figure === cylinder)
        let heightCylinder = cylinder.height;
        let baseAreaCylinder = cylinder.baseArea;
        if (target === capacity) {
            let capacity = heightCylinder * baseAreaCylinder;
            document.getElementById("c").innerHTML =
                "Объем цилиндра: " + capacity;
            console.log(typeof capacity + " " + capacity);
        }
    }
};

/*
    Task 4:
    Напиши рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
    И потом сравните ваш результат с тем что на самом деле вывела консоль.
    
    Infinity - "1"
    "42" + 42
    2 + "1 1"
    99 + 101
    "1" - "1"
    "Result: " + 10/2
    3 + " bananas " + 2 + " apples "
*/
let exp1 = Infinity - "1";
let exp2 = "42" + 42;
let exp3 = 2 + "1 1";
let exp4 = 99 + 101;
let exp5 = "1" - "1";
let exp6 = "Result: " + 10/2;
let exp7 = 3 + " bananas " + 2 + " apples ";

function check() {
    console.log(exp1 + " - type is: " + typeof exp1);
    console.log(exp2 + " - type is: " + typeof exp2);
    console.log(exp3 + " - type is: " + typeof exp3);
    console.log(exp4 + " - type is: " + typeof exp4);
    console.log(exp5 + " - type is: " + typeof exp5);
    console.log(exp6 + " - type is: " + typeof exp6);
    console.log(exp7 + " - type is: " + typeof exp7);
}