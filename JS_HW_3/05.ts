// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 6 При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем
let count = 0
let countPlus = 0
let countMinus = 0
let countZero = 0
let countEven = 0
let countNotEven = 0

do {
   let userNumber = +prompt('Введите число');
   if (userNumber > 0){
      countPlus++
   }
   if (userNumber == 0) {
      countZero++
   }

   if (userNumber < 0) {
      countMinus++
   }

   if (userNumber % 2 == 0) {
      countEven++
   }

   else {
      countNotEven++
   }

   count++
}
while(count < 10);
alert(`Положительных чисел: ${countPlus}, отрицательных чисел: ${countMinus}, нулей: ${countZero}, четных: ${countEven}, нечетных: ${countNotEven}`)