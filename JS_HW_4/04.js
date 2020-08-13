// Написать функцию, которая проверяет, является ли переданное ей число простым
function check(userNumber) {
    var count = 0;
    for (var i = 1; i <= userNumber; i++) {
        if ((userNumber % i) == 0) {
            count++;
        }
    }
    if (count == 2 && userNumber > 1) {
        alert('Число простое');
    }
    else {
        alert('Число не простое');
    }
}
check(+prompt('Введите число'));
