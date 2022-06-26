// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на
// їх відповідність емейлу. Валідними вважаються всі символи на різних
// позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true


function checkEmail(email) {
    let re = /^[A-Za-z0-9\.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*/;
    return re.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("Qmail2@gmail"));
console.log(checkEmail("Qmail2@gmail.ccc.vvv.vvv"));
