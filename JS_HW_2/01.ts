// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)

let userAge: number = +prompt('Сколько вам лет?', '22');

if (userAge >= 0 && userAge <= 2) {
   alert('Вы ребенок!');

} else if (userAge > 2 && userAge < 12) {
   alert('Вы школобес!');

} else if (userAge >= 12 && userAge <= 18) {
   alert('Вы подросток!');

} else if (userAge > 18 && userAge < 60) {
   alert('Вы взрослый!');

} else if (userAge >= 60) {
   alert('Вы пенсионер!');
}