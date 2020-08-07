// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется

let question;
do {
   let firstNumber = +prompt('Введите первое число');

   let secondNumber = +prompt('Введите второе число');

   let action = prompt('Введите знак');

   let act =eval(`${firstNumber}${action}${secondNumber}`);
   alert(act);
   question = confirm("Хотите решить еще пример?");
   
} while (question == true);