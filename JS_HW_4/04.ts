// Написать функцию, которая проверяет, является ли переданное ей число простым
function check(userNumber) {
   let count: number = 0;
   for (let i = 1; i <= userNumber; i++) {
      if ((userNumber % i) == 0) {
         count++
      }
   }
   if (count == 2 && userNumber > 1) {
      alert('Число простое');
   }
   else {
      alert('Число не простое');
   }
}

check(+prompt('Введите число'));
