// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9

function printTable(userNumber){
   let print = '';
   for (let i = 1; i <= 10; i++) {
      print += `${userNumber} * ${i} = ${userNumber * i}\n`;
   }
   alert(print);
}
printTable(+prompt('Введите число и получите таблицу умножения'));