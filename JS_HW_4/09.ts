// Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные)

function PrintNumbers(minNumber, maxNumber, _bool) {
   if (maxNumber > minNumber) {
      let even = '';
      let notEven = '';
      for (let i = minNumber; i <= maxNumber; i++) {
         if (i % 2 == 0) {
            even += `${i} `
         }
         else {
            notEven += `${i} `
         }
      }
      if (_bool == 'true') {
         alert(even);
      }
      else {
         alert(notEven);
      }
   }
   else {
      alert('Введите сначало меньшее число')
   }
}

PrintNumbers(+prompt('Введите первое число'),+prompt('Введите последнее число'), prompt('Если нужно вывести четные числа напишите true , если нечетные то напишите что-то другое') )