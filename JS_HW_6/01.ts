// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let shopList = [{
   productName:'Хлеб',
   productQuantity: 3,
   productStatus: 'Куплено'
},
{
   productName:'Яйца',
   productQuantity: 20,
   productStatus: 'Не куплено'
},
{
   productName:'Сыр',
   productQuantity: 1,
   productStatus: 'Не куплено'
},
{
   productName:'Мясо',
   productQuantity: 2,
   productStatus: 'Куплено'
},
];


// - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

// function printShopList(shopList){
//    let newShopList = [];
//    for (let i = 0; i < shopList.length; i++) {
//       if (shopList[i].productStatus == 'Не куплено') {
//          newShopList.unshift(newShopList[i].productName);
//       }
//       if (shopList[i].productStatus == 'Куплено') {
//          newShopList.push(newShopList[i].productName);
//       }
//    }
//    for (let value of newShopList) {
//       console.log(value);
//   }
// }
// printShopList(shopList);


// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

function buyProduct(productName:string){
   for (let i = 0; i < shopList.length; i++) {
     if (shopList[i].productName == productName) {
       shopList[i].productStatus = 'Куплено'
       alert('Куплено')
       return shopList
      }
   }
   alert('Такого продукта в списке нет!')
}
buyProduct(prompt('Введите продукт который хотите купить \n Хлеб \n Яйца \n Сыр \n Мясо'));
