// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму
const EUR = 0.85;

const UAN = 27.9;

const AZN = 1.7;

let userMoney = +prompt('Введите сколько у вас долларов');

let userCurrency = prompt('В какую валюту хотите перевести? (EUR, UAN, AZN)');

switch(userCurrency) {
   case 'EUR':
      alert(userMoney * EUR);
      break;
   case 'UAN':
      alert(userMoney * UAN);
      break;
   case 'AZN':
      alert(userMoney * AZN);
      break;
   default:
      alert('Я не знаю такой валюты');
      break;
}


