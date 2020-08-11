// Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать

function remainder(firstNumber, secondNumber) {
   if (firstNumber >= secondNumber) {
      let result = 0;
      for (let i = 1; secondNumber * i < firstNumber; i++) {
         result++
      } 
      return firstNumber - secondNumber * result;
   }
   else {
      return 0;
   }
}

let fun = remainder(+prompt('number1'), +prompt('number2') );
alert(fun);