// Написать функцию, которая вычисляет факториал переданного ей числа

function factorial(userNumber) {
   let diff;
   for (let i = 1; userNumber > 1; userNumber--) {
      diff *= (userNumber * i);
   }
   return diff
}

let fun = factorial(+prompt("Введите число"));
alert(fun);
