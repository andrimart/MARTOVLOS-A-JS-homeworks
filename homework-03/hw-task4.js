// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат
// піднесення числа a до степеня b. Функція працює тільки з цілими
// числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
//          ^^^^^^^^^^^^^^^^^^^^^
// Sample Output:
// raiseToDegree(3, 4);  // 81

function raiseToDegree(a,b) {
    return a ** b;
}

const args = process.argv.slice(2);
if (args.length == 0) {
    // print help
    console.log('\nRaise number to degree.\n\nUsage: '
		+'task4 <a> <b>\n   <a> - number\n   <b> - degree\n\n');
} else {
    let a = args[0];
    let b = args[1];
    console.log(raiseToDegree(a,b));
}
