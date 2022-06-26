// 7. Напишіть функцію, яка перевіряє правильність логіна. Правильний
// логін - рядок від 2 до 10 символів, що містить лише букви та числа,
// номер не може бути першим. Функція має приймати рядок і знаходити усі
// числа в цьому рядку, включаючи числа з плаваючою комою (наприклад,
// 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// 1.1, 3
// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3

function checkLogin(str) {
    let is_correct = true;
    let re_begin = /^\d/;
    let re_main = /[^A-Za-z\d\.]/;
    let re_dot = /\./g;
    let re_numbers = /(\d+\.\d+)|(\d+)/g;
    if (re_begin.test(str) == true) {
	is_correct = false;
    } else if (re_main.test(str) == true) {
	is_correct = false;
    } else if (re_dot.test(str) == true) {
	let re_float = /\d+\.\d+/g;
	if (re_float.test(str) == false)
	    is_correct = false;
    }
    console.log(is_correct);
    console.log(str.match(re_numbers));
}

checkLogin('ee1.1ret3'); // true 1.1, 3
checkLogin('ee1*1ret3'); // false 1, 1, 3
