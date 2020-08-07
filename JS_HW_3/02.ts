// Запросить 2 числа и найти только наибольший общий делитель

let firstNum = +prompt('Введите первое число');
let secondNum = +prompt('Введите второе число');

let result = (firstNum > secondNum) ? firstNum : secondNum;
while(result > 0) {
   if(firstNum % result == 0 && secondNum % result == 0) {
      alert(result);
      break;
   }

   result--
}