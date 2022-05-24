// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// Результат:
// "Rome*Lviv*Warsaw"

let cities = ["Rome", "Lviv", "Warsaw"]; 

let i;
let str = '';

for (i=0; i < cities.length; i++) {
    if (i > 0)
	str += '*';
    str += cities[i];
}

console.log(str);
