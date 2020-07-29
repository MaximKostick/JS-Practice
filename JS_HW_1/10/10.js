// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов

const BANKPERCENT = 5;

let userMoney = +prompt('Введите сумму вклада в банк на 2 месяца', '2000');

let yearPercentProfit = (userMoney / 100) * BANKPERCENT;

let twoMonthPercentProfit = yearPercentProfit / 6;

let twoMonthMoneyProfit = userMoney + twoMonthPercentProfit;

alert(`За 2 месяца вам начислят: ${twoMonthPercentProfit}%`);

alert(`Через 2 месяца у вас будет столько денег: ${twoMonthMoneyProfit}`);