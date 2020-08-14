// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом. 
// - Функция для вывода на экран информации об автомобиле
// - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час

let averageSpeed =  {
   time: 1,
   distance: 100
}

let car = {
   manufacturer: 'BMW',
   model: 'x6',
   issueYear: 2020,
   averageSpeed: `${averageSpeed.distance}км/${averageSpeed.time}час`
}

function carInfo(car) {
   let info = ''
   for (const key in car) {
      info += `${key} : ${car[key]} \n`
   }
   alert(info)
}

carInfo(car);

function calcTime(userDistance: number) {
   let count = 0;
   let needTime = userDistance / averageSpeed.distance;
   for (let i = 0; i <= needTime; i += 4) {
      count++
   }
   alert((userDistance / averageSpeed.distance) + count - 1);
   
}

calcTime(+prompt('Введите расстояние которое нужно проехать'));

