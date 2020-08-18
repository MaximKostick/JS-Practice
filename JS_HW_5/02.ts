// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// - Функция сложения 2-х объектов-дробей.
// - Функция вычитания 2-х объектов-дробей.
// - Функция умножения 2-х объектов-дробей.
// - Функция деления 2-х объектов-дробей.
// - Функция сокращения объекта-дроби.

  interface fraction {
   upNumber:number,
   downNumber:number
}

// Умножение

function fractionMultiplication (firstFr:fraction, secondFr:fraction){
   let upNumbersMultiply = firstFr.upNumber * secondFr.upNumber;
   let downNumbersMultiply = firstFr.downNumber * secondFr.downNumber;
   alert(`${upNumbersMultiply}/${downNumbersMultiply}`);
}

// Деление

function fractionDivision (firstFr:fraction, secondFr:fraction){
   let upNumbersMultiply = firstFr.upNumber * secondFr.downNumber;
   let downNumbersMultiply = firstFr.downNumber * secondFr.upNumber;
   alert(`${upNumbersMultiply}/${downNumbersMultiply}`);
}

// Сложение

function fractionPlus (firstFr:fraction, secondFr:fraction){
   let minDownNumber:number;
if (firstFr.downNumber > secondFr.downNumber) {
   minDownNumber = secondFr.downNumber
}
if (firstFr.downNumber < secondFr.downNumber) {
   minDownNumber = firstFr.downNumber
}
if (firstFr.downNumber == secondFr.downNumber) {
   let upNumbersAdd = firstFr.upNumber + secondFr.upNumber;
   alert(`${upNumbersAdd}/${firstFr.downNumber}`)
}
let i
  for ( i = minDownNumber; i % firstFr.downNumber != 0 && i % secondFr.downNumber != 0; i++) {
     
  }
  let upNumbersAdd = firstFr.upNumber + secondFr.upNumber;
  alert(`${upNumbersAdd}/${i}`)
}

// Вычитание

function fractionMinus (firstFr:fraction, secondFr:fraction){
   let minDownNumber:number;
if (firstFr.downNumber > secondFr.downNumber) {
   minDownNumber = secondFr.downNumber
}
if (firstFr.downNumber < secondFr.downNumber) {
   minDownNumber = firstFr.downNumber
}
if (firstFr.downNumber == secondFr.downNumber) {
   let upNumbersAdd = firstFr.upNumber - secondFr.upNumber;
   alert(`${upNumbersAdd}/${firstFr.downNumber}`)
}
let i
  for ( i = minDownNumber; i % firstFr.downNumber != 0 && i % secondFr.downNumber != 0; i++) {
     
  }
  let upNumbersAdd = firstFr.upNumber - secondFr.upNumber;
  alert(`${upNumbersAdd}/${i}`)
}

// Сокращение

function fractionSimple (firstFr:fraction){
   let result = (firstFr.upNumber > firstFr.downNumber) ? firstFr.upNumber : firstFr.downNumber;
   while(result > 0) {
      if(firstFr.upNumber % result == 0 && firstFr.downNumber % result == 0) {
         break;
      }
      result--
   }
   let upNumberSimple = firstFr.upNumber / result;
   let downNumberSimple = firstFr.downNumber / result;
   alert(`${upNumberSimple}/${downNumberSimple}`);
}