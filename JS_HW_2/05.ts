// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

let userNumber = +prompt('Введите пятиразрядное число', '20002');

let num5 = userNumber % 10;
// 2

let userNumberRemainder100 = userNumber % 100;
// 02

let num4 = (userNumberRemainder100 - num5) / 10;
// 0

let userNumberRemainder1000 = userNumber % 1000;
// 002

let num3 = (userNumberRemainder1000 - userNumberRemainder100) / 100;
// 0

let userNumberRemainder10000 = userNumber % 10000;
// 0002

let num2 = (userNumberRemainder10000 - userNumberRemainder1000) / 1000;

let num1 = (userNumber - userNumberRemainder10000) / 10000;



let userNumberConvert: number = Number(`${num5}${num4}${num3}${num2}${num1}`);
if (userNumber == userNumberConvert) {
alert('Число палиндром');
}
else {
   alert('Число не палиндром');
}



