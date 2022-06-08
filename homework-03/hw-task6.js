// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє
// на унікальність його елементи. Якщо всі елементи масиву унікальні (не
// мають дублів), то функція поверне true, інакше - false.

// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
    let i = 0;
    let uniq_arr = [];
    for (let x=0; x < arr.length; x++) {
	for (let y=0; y < uniq_arr.length; y++) {
	    if (arr[x] == uniq_arr[y])
		return false;
	}
	uniq_arr[i++] = arr[x];
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
