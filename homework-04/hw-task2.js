// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій
// вік і генерувати в модальному вікні помилки у випадку, коли:
//         - юзер ввів порожню стрічку (наприклад “The field is empty!
//           Please enter your age”),
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.


function isAgeCorrect(age) {
    if (arguments.length == 0 || age.length == 0) {
	throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(age) == true) {
	throw new Error('Age is not a number');
    } else if (Number(age) < 14) {
	throw new Error('Age is below 14 years');
    }
    return true;
}


try {
    let a = prompt('Enter your age:');
    if (isAgeCorrect(a)) {
	console.log('You are allowed to watch this movie')
    }
} catch (exp) {
    console.log(exp.name + ': ' + exp.message);
} finally {
    console.log('Finished')
}
