// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу

const CURRENTYEAR = 2020;

let userBirthday = +prompt('Введите год вашего рождения:', '1998');

let userYear = CURRENTYEAR - userBirthday;

alert(`Поздравляю, вам ${userYear}`);