// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год
let userDay = +prompt('Введите текущий день');
let userMonth = +prompt('Введите текущий месяц');
let userYear = +prompt('Введите текущий год');

if (userDay >=1 && userDay <= 31) {
   if (userMonth >= 1 && userMonth <= 12) {
      if (userYear >= 2000) {
         alert('Дата введена верно');
         userDay++
         if (userDay > 31) {
            userMonth++
            let userDay = 1;
            if (userMonth > 12) {
               let userMonth = 1;
               let userDay = 1;
               userYear++
               alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`);

            }
            else {
               alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`);
            }
         }
         else {
            alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`);
         }

      }
      else {
         alert('Нет такого года');
      }
   }
   else {
      alert('Нет такого месяца');
   }
}

else {
   alert('Нет такого числа');
}