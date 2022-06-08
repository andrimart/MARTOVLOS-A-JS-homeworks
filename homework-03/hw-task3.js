// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k
// випадковими цілими числами. Випадкові числа генеруються із діапазону
// 1-500.

// Sample Output:
// randArray(5);  // [399,310,232,379,40]

function randArray(num) {
    let arr = [];
    for (let i=0; i < num; i++) {
	arr[i] = Math.floor(Math.random() * (500 - 1)) + 1;
    }
    return arr;
}

let k = randArray(5);

console.log(k);
