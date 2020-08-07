// Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму
function printSum(num1, num2, num3, num4, num5) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    if (num3 === void 0) { num3 = 0; }
    if (num4 === void 0) { num4 = 0; }
    if (num5 === void 0) { num5 = 0; }
    return num1 + num2 + num3 + num4 + num5;
}
var fun = printSum(2, 3, 3, 5, 5);
alert(fun);
