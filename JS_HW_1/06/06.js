// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе

let euro = +prompt('Сколько у вас долларов?', '100');

const DOLLAR = 0.85 * euro;

alert(`У вас ${DOLLAR} евро`);