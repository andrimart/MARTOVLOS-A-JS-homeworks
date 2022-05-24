// 2. Користувач вводить число (використовуйте prompt ()). Необхідно
// перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.

let is_num_even            = false;
let is_num_positive        = false;
let is_num_multiplies_of_7 = false;

let n = prompt('Input number:');

if (n%2 == 0) {
    is_num_even = true;
}
if (n > 0) {
    is_num_positive = true;
}
if (n%7 == 0) {
    is_num_multiplies_of_7 = true;
}

console.log('Number ' + n + ' is '
	    + (is_num_even && is_num_positive ? '' : 'not ')
	    + 'positive even.');
console.log('Number ' + n
	    + (!is_num_multiplies_of_7 ? ' don\'t' : '')
	    + ' multiplies of 7.');
