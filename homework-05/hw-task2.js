// 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати
// функцію showProps(obj), яка приймає даний об’єкт і виводить список
// його властивостей записаних в масив. Виведіть також масив значень
// властивостей об’єкта.

let o = {
    real: true,
    id: 1,
    title: 'real obj',
    pin: 1234,
    cost: 123.2
};


function showProps(obj) {
    let arr = [];
    for (let x in obj) {
	arr.push(x);
    }
    return arr;
}

function showPropValues(obj) {
    let arr = [];
    for (let x in obj) {
	arr.push(obj[x]);
    }
    return arr;
}

console.log('props : '+showProps(o));
console.log('values: '+showPropValues(o));
