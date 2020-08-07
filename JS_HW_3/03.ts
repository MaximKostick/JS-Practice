// Запросить у пользователя число и вывести все делители этого числа

let firstNum = +prompt('Введите первое число');
let secondNum = +prompt('Введите второе число');

let result = (firstNum > secondNum) ? firstNum : secondNum;
while(result > 0) {
   if(firstNum % result == 0 && secondNum % result == 0) {
      alert(result);
   }

   result--
}