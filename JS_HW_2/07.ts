// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%

let userPrice = +prompt('Введите сумму покупки');

let discount3 = userPrice - (userPrice * 0.03);
let discount5 = userPrice - (userPrice * 0.05);
let discount7 = userPrice - (userPrice * 0.07);

if (userPrice > 200 && userPrice < 300) {
   alert(discount3);
}

else if (userPrice > 300 && userPrice < 500) {
   alert(discount5);
}

else if (userPrice > 500) {
   alert(discount7);
}

else {
   alert("У нас на такую сумму не покупают!");
}