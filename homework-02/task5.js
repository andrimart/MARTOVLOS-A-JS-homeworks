// 5. Використовуючи функцію prompt() задайте користувачу питання про
// досягнення ним повнолітнього віку. Результат запишіть в змінну
// isAdult. В залежності від отриманого значення виведіть відповідне
// повідомлення про статус особи. Наприклад: при виконанні умови вік
// більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18
// років вивести “Ви ще надто молоді”,


let isAdult = prompt('Чи ви досягнули повноліття? (так/ні)');

if (isAdult == 'так') {
    console.log('Ви досягли повнолітнього віку.')
} else if (isAdult == 'ні') {
    console.log('Ви ще надто молоді.')
} else {
    console.log('Некоректна відповідь.')
}
