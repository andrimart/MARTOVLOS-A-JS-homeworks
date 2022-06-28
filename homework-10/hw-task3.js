// 3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів
// різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul() {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// Не можна використовувати властивість arguments, але в функцію mul()
// можна додати один параметр.


function mul() {
    let num = 0;
    for (let i=0; i < arguments.length; i++) {
	let p = arguments[i];
	if (typeof(p) == 'number') {
	    num += p;
	}
    }
    return num;
}
console.log(mul(1, "str", 2, 3, true));     // 6
console.log(mul(null, "str", false, true)); // 0
