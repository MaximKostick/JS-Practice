// Написать функцию, которая вычисляет факториал переданного ей числа
function factorial(userNumber) {
    var diff = userNumber;
    var fact = 1;
    for (; diff > 1; diff--) {
        fact *= diff;
    }
    return fact;
}
var fun = factorial(+prompt("Введите число"));
alert(fun);
