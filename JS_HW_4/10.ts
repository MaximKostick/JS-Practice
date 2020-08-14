// Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки  «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией

function leapYear(userYear) {
   let userYearMultiplicity400 = userYear % 400;
   let userYearMultiplicity4 = userYear % 4;
   let userYearMultiplicity100 = userYear % 100;
      if (userYearMultiplicity4 == 0) {
         if (userYearMultiplicity100 == 0) {
            if (userYearMultiplicity400 == 0) {
               return true // год высокосный
            }
            else {
               return false // год не высокосный
            }  
         }
         else {
            return true // год высокосный
         }
      }
   
      else {
         return false // год не высокосный
      }
}

function userData(userDay, userMonth, userYear ) {
   let countDay: number = 365;
   let countMonth: number = 12;
   if (leapYear(userYear) == true) {
      countDay = 366;
      userDay++
      if (userMonth == 2 && userDay > 29 ) {
         userMonth++;
         userDay = 1;
         alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`)
      }
      if (userDay > 31) {
         userMonth++
         if (userMonth > countMonth) {
            userYear++
            userDay = 1;
            userMonth = 1;
            alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`)
         }
      }
   }
   else {
      if (userDay > 28) {
         alert('Такого дня в году нет!');
      }
      else {
         userDay++
         if (userMonth == 2 && userDay > 28 ) {
            userMonth++;
            userDay = 1;
            alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`)
         }
         if (userDay > 31) {
            userMonth++
            if (userMonth > countMonth) {
               userYear++
               userDay = 1;
               userMonth = 1;
               alert(`Завтра будет ${userDay}.${userMonth}.${userYear}`)
            }
         }
      }
   }
}

userData(+prompt('Введите день'), +prompt('Введите месяц'), +prompt('Введите год'));
