// 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2
// параметри ширина прямокутника width і висота прямокутника height і
// обраховує його площу. Передбачити припинення виконання програми і
// генерацію винятку у випадку, якщо функції передано не числові
// параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі
// виняткові ситуації.


function calcRectArea(w,h) {
    return w * h;
}

try {
    let w = prompt('Enter width:');
    let h = prompt('Enter height:');
    if (isNaN(w) == true || isNaN(h) == true) {
	throw new Error('Wrong rectangle data');
    }
    console.log('Area: '+calcRectArea(w,h));
} catch (exp) {
    console.log(exp.name);
    console.log(exp.message);
} finally {
    console.log('Finished')
}
