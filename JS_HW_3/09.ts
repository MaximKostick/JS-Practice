// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let minNumber = 2; minNumber <= 9; minNumber++) {
   for (let factor = 1; factor <= 10; factor++) {
      let action = minNumber * factor;
      alert(action);
   }
}