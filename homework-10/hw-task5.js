// 5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає
// два масиви однакової довжини. Використовуючи ці масиви, функція
// повинна створювати об'єкт типу Map, ключами якого є значення з першого
// масиву, а значеннями Map - значення з другого масиву. Після цього
// функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

function mapBuilder(keysArray, valuesArrays) {
    let m = new Map();
    for (let i=0; i < keysArray.length && i < valuesArrays.length; i++)
	m.set(keysArray[i], valuesArrays[i]);
    return m;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
