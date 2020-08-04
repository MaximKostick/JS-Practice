// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры

let userNum = +prompt('Введите любое трехзначное число', '358');

let remainderHundred = userNum % 100;
// 58

let thirdNum = userNum % 10;
// 8

let secondNum = (remainderHundred - thirdNum) / 10;
// 5

let firstNum = (userNum - remainderHundred) / 100;

if (firstNum == secondNum && secondNum == thirdNum) {
   alert('Бинго, у нас все цифры одинаковые!');
}

else if (secondNum == thirdNum) {
   alert("Есть совпадения, последние две цифры одинаковые!");
}

else if (firstNum == thirdNum) {
   alert("Есть совпадения, первая и последняя цифры одинаковые!");
}

else if (firstNum == secondNum) {
   alert('Есть совпадения, первые две цифры одинаковые!')
}

else {
   alert('Извините,одинаковых цифр нет');
}