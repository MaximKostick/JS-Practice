// Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно

function checkSpam(str) {
   let lowerStr = str.toLowerCase();
 
   if (lowerStr.includes('100% бесплатно') || lowerStr.includes('увеличение продаж') || lowerStr.includes('только сегодня') || lowerStr.includes('не удаляйте') || lowerStr.includes('xxx')) {
      alert('Есть спам')
   }
   else {
      alert('Спама нет')
   }
 }
 
checkSpam(prompt('Введите слова'));