// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется
var question;
do {
    var firstNumber = +prompt('Введите первое число');
    var secondNumber = +prompt('Введите второе число');
    var action = prompt('Введите знак');
    var act = eval("" + firstNumber + action + secondNumber);
    alert(act);
    question = confirm("Хотите решить еще пример?");
} while (question == true);
