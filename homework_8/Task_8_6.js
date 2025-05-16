// Вихідний масив
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Копіювання масиву
const sortedNumbers = [...numbersList];

// Сортування масиву (від меншого до більшого)
sortedNumbers.sort((a, b) => a - b);

// Виведення обох масивів
console.log("Оригінальний масив:", numbersList);
console.log("Відсортований масив:", sortedNumbers);
