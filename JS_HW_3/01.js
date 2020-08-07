// Подсчитать сумму всех чисел в заданном пользователем диапазоне
var minNumber = +prompt('Введите минимальное число');
var maxNumber = +prompt('Введите максимальное число');
var sum = 0;
while (minNumber <= maxNumber) {
    sum += minNumber;
    minNumber++;
}
alert(sum);
