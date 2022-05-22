// 7. За допомогою функції prompt() напишіть скріпт, який послідовно
// запитує в користувача логін, емейл та пароль, і виводить на екран
// повідомлення із введеними даними. Наприклад “Dear User, your email is
// usermale@gmail.com, your password is qwerty”.

function askInfo() {
    login = prompt('Your login?');
    email = prompt('Your email?');
    passw = prompt('Your password?');
    alert('Dear User \'' + login + '\'.\nYour email is \''
	  + email + "', and your password is '" + passw + "'.");
};
