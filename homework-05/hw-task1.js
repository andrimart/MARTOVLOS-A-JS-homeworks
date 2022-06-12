// 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і
// визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3


function propsCount(obj)
{
    let i = 0;
    for (let x in obj)
	i++;
    return i;
}

let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
};

console.log(propsCount(mentor));
