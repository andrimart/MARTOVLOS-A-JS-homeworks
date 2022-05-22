// 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі,
// в місяці, записує результати в відповідні змінні, і виводить їх
// значення на екран.

function calcDuration() {
    let hours   = prompt('Input hours');
    let days    = prompt('Input days');
    let months  = prompt('Input months');

    let seconds = (hours*3600)+(days*86400)+(months*86400*30);

    alert(hours+" hour(s), "+ days+" day(s) and "
	  +months+" month(s) consist of "+seconds+" seconds.");
};
