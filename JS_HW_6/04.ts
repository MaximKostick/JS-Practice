// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
// - Вывод на экран всех аудиторий.
// - Вывод на экран аудиторий для указанного факультета.
// - Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.
// - Функция сортировки аудиторий по количеству мест.
// - Функция сортировки аудиторий по названию (по алфавиту).

let allHalls = [{
   name: '1',
   seatNumber: 10,
   facultyName: 'Фронтенд'
},
{
   name: '2',
   seatNumber: 15,
   facultyName: 'Дизайн'
},
{
   name: '3',
   seatNumber: 20,
   facultyName: 'Англ'
},
{
   name: '4',
   seatNumber: 15,
   facultyName: 'Англ'
}
]

function printHalls() {
   let print = '';
   for (let i = 0; i < allHalls.length; i++) {
      print += `Аудитория ${allHalls[i].name} для факультета \"${allHalls[i].facultyName}\"\n`
   }
   alert(print)
}

printHalls();

function sortByFaculty(facultyName) {
   let print = '';
   for (let i = 0; i < allHalls.length; i++) {
      if (allHalls[i].facultyName == facultyName) {
         print += `Аудитория ${allHalls[i].name} для факультета \"${allHalls[i].facultyName}\"\n`
      }
   }
   alert(print);
}

sortByFaculty(prompt('Введите название факультета \n Фронтенд \n Дизайн \n Англ'))