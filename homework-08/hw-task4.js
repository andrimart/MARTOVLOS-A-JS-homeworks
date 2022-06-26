// 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки
// буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

function swapSubStr(str) {
    let re = /(\w+)\s+(\w+)/;
    let r=str.match(re);
    return r[2] + ', ' + r[1];
}

console.log(swapSubStr("Java Script"));
