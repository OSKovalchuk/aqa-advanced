// Масив чисел
const numbers = [10, 20, 30, 40, 50];

// Обчислення суми елементів масиву
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Вивід результату
console.log("Сума елементів масиву:", sum);
