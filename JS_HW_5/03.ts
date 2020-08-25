// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 
// - Функция вывода времени на экран. 
// - Функция изменения времени на переданное количество секунд. 
// - Функция изменения времени на переданное количество минут. 
// - Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
   hour: 0,
   minute: 0,
   second: 0
}

// Проверка на правильность времени

do {
   time = {
      hour: +prompt('Введите кол-во часов'),
      minute: +prompt('Введите кол-во минут'),
      second: +prompt('Введите кол-во секунд')
   }
   if (time.hour > 24 || time.minute >= 60 || time.second >= 60) {
      alert('Вы неправильно ввели время! Попробуйте снова')
   } 
} while (time.hour > 24 || time.minute >= 60 || time.second >= 60);

// Функция вывода времени на экран

// function timeInfo(time) {
//       let info = ''
//       for (const key in time) {
//          info += `${key} : ${time[key]} \n`
//       }
//       alert(info)
// }

// timeInfo(time);

// // Функция изменения времени на переданное количество часов

// function hourDiff(userHour){
//    if (time.hour + userHour > 24) {
    
//    time.hour =  userHour - (24 - time.hour);
//    alert(`${time.hour}:${time.minute}:${time.second}`)
//    }
//    else {
//       time.hour += userHour
//       alert(`${time.hour}:${time.minute}:${time.second}`)
//    }
// }

// hourDiff(+prompt('Введите кол-во часов на которое хотите изменить время'));

// // Функция изменения времени на переданное количество минут

// function minuteDiff(userMinute){
//    if (time.minute + userMinute >= 60) {
//       time.minute =  userMinute - (60 - time.minute);
//       time.hour++
//       alert(`${time.hour}:${time.minute}:${time.second}`)
//    }
//    else {
//       time.minute += userMinute
//       alert(`${time.hour}:${time.minute}:${time.second}`)
//    }
// }

// minuteDiff(+prompt('Введите кол-во минут на которое хотите изменить время'));

function secondDiff(userSecond) {
   let hourToSecond = time.hour * 3600;
   let minuteToSecond = time.minute * 60;
   let allSecond = hourToSecond + minuteToSecond + time.second + userSecond
   let secondHour = allSecond - (allSecond % 3600);
   let secondToHour = secondHour / 3600;
   let secondMinute = (allSecond - secondHour) - ((allSecond - secondHour) % 60);
   let secondToMinute = secondMinute / 60
   time.second = allSecond - secondHour - secondMinute
   
   alert(`${secondToHour}:${secondToMinute}:${time.second}`)
}
secondDiff(+prompt('Введите кол-во секунд на которое хотите изменить время'));
