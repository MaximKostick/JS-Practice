// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK
let dayCount = 1;
let userDay
do {
   let dayName;
   switch(dayCount) {
      case 1:
         dayName = "Понедельник";
         break;
      case 2:
         dayName = "Вторник";
         break;
      case 3:
         dayName = "Среда";
         break;
      case 4:
         dayName = "Четверг";
         break;
      case 5:
         dayName = "Пятница";
         break;
      case 6:
         dayName = "Суббота";
         break;
      case 7:
         dayName = "Воскресенье";
         break;
   }
   userDay = confirm(`${dayName}. Хотите увидеть следующий день?`);
   dayCount++
   if (dayCount > 7) {
      dayCount = 1
   }

} while (userDay == true);