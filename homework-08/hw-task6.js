// 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на
// 	їх відповідність емейлу.  Вимоги:
//   Цифри (0-9).
//   Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//   В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//   Символ “-” не може повторюватися.
// checkEmail('my_mail@gmail.com');
// Email is correct!
// checkEmail('#my_mail@gmail.com');
// Email is not correct!
// checkEmail('my_ma--il@gmail.com');
// Email is not correct!

function checkEmail(email) {
    let incorrect = false;
    let re1 = /^_/;
    let re2 = /--/;
    let re3 = /\.\./;
    let re4 = /^[\w-]+@[A-Za-z\d\.]/;
    if (re1.test(email) == true) {
	incorrect = true;
    } else if (re2.test(email) == true) {
	incorrect = true;
    } else if (re3.test(email) == true) {
	incorrect = true;
    } else if (re4.test(email) == false) {
	incorrect = true;
    }
    console.log('Email is' + (incorrect ? ' not' : '') + ' correct!');
}

checkEmail('my_mail@gmail.com');  // Email is correct!
checkEmail('#my_mail@gmail.com'); // Email is not correct!
checkEmail('my_ma--il@gmail.com');// Email is not correct!
