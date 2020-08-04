// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов

let firstQuestion = prompt('Сколько ног у человека? a) 2; b) 3; c) 4;');

if (firstQuestion == 'a') {
   alert('Правильно!');
   let secondQuestion = prompt('Сколько ног у собаки? a) 2; b) 3; c) 4;');
   if (secondQuestion == 'c') {
      alert('Правильно!');
      let thirdQuestion = prompt('Сколько ног у многоножки? a) 2; b) много; c) 4;');
         if (thirdQuestion == 'b') {
            alert('Правильно!');
            alert('Поздравляю, у вас 6 баллов!');
         }
         else {
            alert("Неверно!");
            alert('Поздравляю, у вас 4 балла!');
         }
   }
   else {
      alert ("Неверно!")
      let thirdQuestion = prompt('Сколько ног у многоножки? a) 2; b) много; c) 4;');
         if (thirdQuestion == 'b') {
            alert('Правильно!');
            alert('Поздравляю, у вас 4 балла!');
         }
         else {
            alert("Неверно!");
            alert('Поздравляю, у вас 2 балла!');
         }
   }
}

else {
   alert ("Неверно!")
   let secondQuestion = prompt('Сколько ног у собаки? a) 2; b) 3; c) 4;');
      if (secondQuestion == 'c') {
         alert('Правильно!');
         let thirdQuestion = prompt('Сколько ног у многоножки? a) 2; b) много; c) 4;');
            if (thirdQuestion == 'b') {
               alert('Правильно!');
               alert('Поздравляю, у вас 4 балла!');
            }
            else {
               alert("Неверно!");
               alert('Поздравляю, у вас 2 балла!');
            }
      }
      else {
         alert ("Неверно!")
         let thirdQuestion = prompt('Сколько ног у многоножки? a) 2; b) много; c) 4;');
            if (thirdQuestion == 'b') {
               alert('Правильно!');
               alert('Поздравляю, у вас 2 балла!');
            }
            else {
               alert("Неверно!");
               alert('Поздравляю, у вас 0 балла!');
            }
      }
}