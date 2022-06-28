// 2. Вихідний код:
// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let /* Ваш код */ = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
// Допишіть код використовуючи деструктурування, щоб в консолі браузера
// з'явилися рядки, які написані в коментарях.


let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let { names: [,name2,,name4], ages: [,age2,,age4] } = data;
console.log(name2); // "Tom"
console.log(age2);  // 24
console.log(name4); // "Bob"
console.log(age4);  // 26
