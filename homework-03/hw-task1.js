// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for
// знайдіть добуток елементів цього масиву. Також реалізуйте завдання
// через while.

let arr = [2, 3, 4, 5];
let i;
let sum = 0;
for (i=0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

i = 0;
sum = 0;
while (i < arr.length) {
    sum += arr[i++];
}
console.log(sum);
