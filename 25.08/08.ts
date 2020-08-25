// Написать функцию, которая возвращает самое длинное
// слово из предложения.

function longestWord(str) {
   let newArray = str.split(' ');
   let maxWord: string = newArray[0];
   for (let i = 1; i < newArray.length; i++) {
      
      if (maxWord.length < newArray[i].length) {
         maxWord = newArray[i]
      }
   }
   alert(maxWord);
}

longestWord(prompt('Введите предложение'))