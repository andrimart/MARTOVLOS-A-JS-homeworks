// 5. Напишіть функцію, яка виконуватиме валідацію номера банківської
// карти (9999-9999-9999-9999).

function cardValidator(str) {
    let re = /\d{4}-\d{4}-\d{4}-\d{4}/;
    return re.test(str);
}

console.log(cardValidator("9999-9999-9999-9999"));
