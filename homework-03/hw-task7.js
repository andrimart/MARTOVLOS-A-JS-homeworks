// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція
// може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що
// відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


function lastElem(arr, x) {
    if (arguments.length == 1)
	return arr.slice(-1);
    if (arguments.length == 2) {
	return arr.slice(-x);
    }
}

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
