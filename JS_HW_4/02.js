// Написать функцию, которая вычисляет факториал переданного ей числа
function factorial(userNumber) {
    var diff;
    for (var i = 1; userNumber > 1; userNumber--) {
        diff *= (userNumber * i);
    }
    return diff;
}
var fun = factorial(+prompt("Введите число"));
alert(fun);
