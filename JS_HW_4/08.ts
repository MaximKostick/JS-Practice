// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них
function printBigger(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
   let max = num1;
   if (max < num2) {
      max = num2;
   }
   if (max < num3) {
      max = num3;
   }
   if (max < num4) {
      max = num4;
   }
   if (max < num5) {
      max = num5;
   }
   alert(max);
}
   
printBigger(+prompt('number1'),+prompt('number2'),+prompt('number3'),+prompt('number4'),+prompt('number5'));