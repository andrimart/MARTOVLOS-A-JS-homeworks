// 3. Створіть клас MonthException, конструктор якого приймає параметр
// message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це
// порядковий номер місяця в році. Функція повертає назву місяця
// відповідно до введеного номера місяця. У випадку некоректного вводу
// кидається ексепшн у вигляді об’єкта класу MonthException з
// повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку
// можливих винятків.
//
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number


class MonthException {
    constructor(message) {
	this.name = 'MonthException';
	this.message = message;
    }
};

function showMonthName(month) {
    let mtext = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    if (month < 1 || month > 12) {
	throw new MonthException('Incorrect month number');
    }
    return mtext[month-1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (ex) {
    console.log(ex.name + ' ' + ex.message);
}
