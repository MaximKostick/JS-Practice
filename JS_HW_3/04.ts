// 4 Определить количество цифр в введенном числе

function numberQuantity(userNumber) {
   if (userNumber < 0) {
      userNumber *= -1;
   }
   let count: number = 0;
   for (let i = 10; userNumber > 1; userNumber /= i) {
      count++
   }
   if (userNumber == 1) {
      alert('1'); 
   }
   else {
      alert(count);
   }

}

numberQuantity(+prompt('Введите число'));