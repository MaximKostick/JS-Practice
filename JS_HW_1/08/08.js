// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется

let userMoney = +prompt('Сколько у вас денег', '100');

let chocolatePrice = +prompt('Введите цену одной шоколадки', '10');

let chocolateNumber = Math.floor(userMoney / chocolatePrice);

let userModulo = userMoney % chocolatePrice;

alert(`На эти деньги вы сможете купить столько шоколадок: ${chocolateNumber}`);

alert(`И при этом у вас будет сдача: ${userModulo}`);