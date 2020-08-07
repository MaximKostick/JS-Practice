// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны

function dif(firstNumber, secondNumber) {
   if (firstNumber == secondNumber) {
      return 0;
   }
   else {
      if (firstNumber > secondNumber) {
         return 1;
      }
      else {
         return -1;
      }
   }
}

let fun = dif(+prompt('Введите первое число'), +prompt('Введите первое число'));
alert(fun);