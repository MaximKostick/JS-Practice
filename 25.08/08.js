// Написать функцию, которая возвращает самое длинное
// слово из предложения.
function longestWord(str) {
    var newArray = str.split(' ');
    var maxWord = newArray[0];
    for (var i = 1; i < newArray.length; i++) {
        if (maxWord.length < newArray[i].length) {
            maxWord = newArray[i];
        }
    }
    alert(maxWord);
}
longestWord(prompt('Введите предложение'));
