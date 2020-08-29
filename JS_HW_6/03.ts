// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве

let cssStyles = [{
   styleName: 'color',
   styleValue: 'darkred'
},
{
   styleName: 'font-size',
   styleValue: '18px'
},
{
   styleName: 'text-align',
   styleValue: 'center'
},
{
   styleName: 'line-height',
   styleValue: '150%'
}
]

function printText(userText: string) {
   let html = '';
   html += `<p style=\"${cssStyles[0].styleName}:${cssStyles[0].styleValue};${cssStyles[1].styleName}:${cssStyles[1].styleValue};${cssStyles[2].styleName}:${cssStyles[2].styleValue};${cssStyles[3].styleName}:${cssStyles[3].styleValue};\">`
   html +=userText;
   html +='</p>'
   document.write(html)
}

printText(prompt('Введите текст'));