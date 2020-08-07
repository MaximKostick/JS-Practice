// Запросить у пользователя число и вывести все делители этого числа
var firstNum = +prompt('Введите первое число');
var secondNum = +prompt('Введите второе число');
var result = (firstNum > secondNum) ? firstNum : secondNum;
while (result > 0) {
    if (firstNum % result == 0 && secondNum % result == 0) {
        alert(result);
    }
    result--;
}
