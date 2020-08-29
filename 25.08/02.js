// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
function textNumber(userNumber) {
    var numberArr = userNumber.split('');
    var text = '';
    switch (numberArr[0]) {
        case '1':
            break;
        case '2':
            text = 'двадцать';
            break;
        case '3':
            text = 'тридцать';
            break;
        case '4':
            text = 'сорок';
            break;
        case '5':
            text = 'пятдесят';
            break;
        case '6':
            text = 'шестьдесят';
            break;
        case '7':
            text = 'семдесят';
            break;
        case '8':
            text = 'восемьдесят';
            break;
        case '9':
            text = 'девяносто';
            break;
    }
    switch (numberArr[1]) {
        case '1':
            break;
        case '2':
            text += ' два';
            break;
        case '3':
            text += ' три';
            break;
        case '4':
            text += ' четыре';
            break;
        case '5':
            text += ' пять';
            break;
        case '6':
            text += ' шесть';
            break;
        case '7':
            text += ' семь';
            break;
        case '8':
            text += ' восемь';
            break;
        case '9':
            text += ' девять';
            break;
    }
    alert(text);
}
textNumber(prompt('Введите двузначное число'));
