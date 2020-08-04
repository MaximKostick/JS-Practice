// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат

let circleWidth = +prompt('Введите длину окружности');
let squarePerimeter = +prompt('Введите периметр квадрата');

let squareSide = squarePerimeter / 4;
let circleDiameter = 2 * (circleWidth / (2 * Math.PI));

if (circleDiameter <= squareSide) {
   alert("Такой круг поместиться в данный квадрат");
}

else {
   alert("Такой круг не поместиться в данный квадрат");
}