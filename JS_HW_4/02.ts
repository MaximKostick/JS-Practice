// Написать функцию, которая вычисляет факториал переданного ей числа

function factorial(userNumber) {
   let diff:number = userNumber;
   let fact: number = 1;

   for (; diff > 1; diff--) {
      fact *= diff;
   }
   return fact
}

let fun = factorial(+prompt("Введите число"));
alert(fun);
