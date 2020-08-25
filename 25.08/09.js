// Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
function returnArray(str, separator) {
    var newArr = str.split(separator);
    console.log(newArr);
}
returnArray(prompt('Enter str'), prompt('Enter separator'));
