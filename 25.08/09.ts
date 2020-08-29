// Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.

// Сплит версия

function returnArray(str,separator) {
   let newArr = str.split(separator);
   console.log(newArr);
}

returnArray(prompt('Enter str'), prompt('Enter separator'))

