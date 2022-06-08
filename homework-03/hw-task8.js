// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу
// букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script' 
// Output string: 'I Love Java Script'


function firstLetterToUpperCase(str) {
    let arr = str.split(' ');
    let out_str = '';
    for (let i in arr) {
	let f = 0;
	for (let x of arr[i]) {
	    if (f == 0)
		out_str += x.toUpperCase();
	    else
		out_str += x;
	    f++;
	}
	out_str += ' ';
    }
    return out_str;
}

console.log(firstLetterToUpperCase('i love java script'));
