// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// - Распечатка чека на экран.
// - Подсчет общей суммы покупки.
// - Получение самой дорогой покупки в чеке.
// - Подсчет средней стоимости одного товара в чеке

let checkList = [{
   productName:'Хлеб',
   productQuantity: 3,
   productPrice: 12
},
{
   productName:'Яйца',
   productQuantity: 20,
   productPrice: 1.5
},
{
   productName:'Сыр',
   productQuantity: 1,
   productPrice: 40
},
{
   productName:'Мясо',
   productQuantity: 1,
   productPrice: 90
},
];


// Распечатка чека на экран

function printCheck() {
   let printRow = '';
   for (let i = 0; i < checkList.length; i++) {
      printRow += `Товар: ${checkList[i].productName} | Цена товара: ${checkList[i].productPrice} грн за шт | Кол-во: ${checkList[i].productQuantity} \n`
   }
   alert(printRow)
}

printCheck();


// Подсчет общей суммы покупки

function allSum() {
   let allSum: number = 0;
   for (let i = 0; i < checkList.length; i++) {
      allSum += (checkList[i].productPrice * checkList[i].productQuantity)
   }
   alert(`Общая сумма покупок: ${allSum}грн`);
}

allSum();


// Получение самой дорогой покупки в чеке

function maxPrice() {
   let maxPriceProduct: number = checkList[0].productPrice;
   for (let i = 0; i < checkList.length; i++) {
      if (maxPriceProduct < checkList[i].productPrice) {
         maxPriceProduct = checkList[i].productPrice
      }
   }
   alert(`Самая дорогая покупка на сумму: ${maxPriceProduct}`)
}

maxPrice();


// Подсчет средней стоимости одного товара в чеке

function averagePrice() {
   let count: number = 0;
   let sum = 0;
   for (let i = 0; i < checkList.length; i++) {
      sum += checkList[i].productPrice
      count++
   }
   alert(sum /= count)
}

averagePrice();
