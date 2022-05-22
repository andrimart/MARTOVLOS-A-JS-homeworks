// 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення.
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.


let fist_name;
let last_name;
let birth_year;
let is_married;
let study_group;
let experience;
let level;

fist_name   = "Андрій";
last_name   = "Мартовлос";
is_married  = true;
birth_year  = 1979;
study_group = "Lv-697.JS CORE";
experience  = undefined;
level       = null;

console.log('fist_name  : ' + fist_name   + '  [' + typeof(fist_name  ) + ']');
console.log('last_name  : ' + last_name   + '  [' + typeof(last_name  ) + ']');
console.log('is_married : ' + is_married  + '  [' + typeof(is_married ) + ']');
console.log('birth_year : ' + birth_year  + '  [' + typeof(birth_year ) + ']');
console.log('study_group: ' + study_group + '  [' + typeof(study_group) + ']');
console.log('experience : ' + experience  + '  [' + typeof(experience ) + ']');
console.log('level      : ' + level       + '  [' + typeof(level      ) + ']');
