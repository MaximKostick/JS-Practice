// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100

let userYear = +prompt('Введите год', '2000');

let userYearMultiplicity400 = userYear % 400;

let userYearMultiplicity4 = userYear % 4;

let userYearMultiplicity100 = userYear % 100;


if (userYearMultiplicity4 == 0) {
   if (userYearMultiplicity100 == 0) {
      if (userYearMultiplicity400 == 0) {
         alert('Год высокосный')
      }

      else {
         alert('Год не высокосный')
      }  
   }
   else {
      alert('Год высокосный')
   }
}

else {
   alert('Год не высокосный')
}
