// Подсчитать сумму всех чисел в заданном пользователем диапазоне

let minNumber = +prompt('Введите минимальное число');
let maxNumber = +prompt('Введите максимальное число');
let sum = 0;

while(minNumber <= maxNumber) {
    sum += minNumber;
    minNumber++
}
alert(sum);
