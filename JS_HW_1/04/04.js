// Запросите у пользователя радиус окружности и выведите площадь такой окружности
const PINUMBER = 3.14;

let circleRadius = +prompt('Введите радиус окружности', '10');

let circleArea = PINUMBER * Math.pow(circleRadius, 2);

alert(`Площадь окружности равна ${circleArea}`);