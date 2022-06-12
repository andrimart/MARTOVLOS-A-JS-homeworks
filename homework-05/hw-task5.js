// 5. Створіть батьківський клас GeometricFigure, який має порожній метод
// для визначення площі getArea() та метод toString() для виведення назви
// класу.

// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються
// від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію
// методу getArea(), для визначення площі фігури. В конструкторах
// дочірніх класів передбачити властивості необхідні для визначення площі
// фігури, наприклад для кола - радіус r.

// Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив
// об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить
// батьківському класу з урахуванням наслідування, виводитиме назву
// створеного об’єкту відповідної фігури, розраховану площу фігури та
// сумарну площу всіх фігур. Для реалізації функції можете використати
// метод reduce().

// class GeometricFigure {
// 	getArea() {
// 	return 0;
// }

// toString() {
// 	return Object.getPrototypeOf(this).constructor.name;
// }
//      }
// 		Your code . . . 
	
// 	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//     	console.log(handleFigures(figures));

// Приклад результату:
// Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area


class GeometricFigure {
    getArea() {
	return 0;
    }
    toString() {
	return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
	super();
	this.a = a;
	this.b = b;
	this.c = c;
    }
    getArea() {
	// Heron's formula
	let p = (this.a + this.b + this.c) / 2;
	let S = (p * (p-this.a) * (p-this.b) * (p-this.c)) ** (1/2);
	return S;
    }
}
class Square extends GeometricFigure {
    constructor(a) {
	super();
	this.a = a;
    }
    getArea() {
	return this.a * this.a;
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
	super();
	this.r = r;
    }
    getArea() {
	return Math.PI * this.r * this.r;
    }
}


function handleFigures(figures) {
    let sum = 0;
    for (let i=0; i < figures.length; i++) {
	console.log('Geometric figure: ' + figures[i].constructor.name + ' area: ' + figures[i].getArea());
	sum += figures[i].getArea();
    }
    return sum;
}

const figures = [new Triangle(5, 5, 5), new Square(7), new Circle(5)];

console.log(handleFigures(figures));
