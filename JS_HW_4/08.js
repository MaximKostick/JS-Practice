// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них
function printBigger(num1, num2, num3, num4, num5) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    if (num3 === void 0) { num3 = 0; }
    if (num4 === void 0) { num4 = 0; }
    if (num5 === void 0) { num5 = 0; }
    var max = num1;
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    if (max < num4) {
        max = num4;
    }
    if (max < num5) {
        max = num5;
    }
    alert(max);
}
printBigger(+prompt('number1'), +prompt('number2'), +prompt('number3'), +prompt('number4'), +prompt('number5'));
