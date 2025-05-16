// Початковий масив
const originalArray = [1, 2, 3, 4, 5];

// Мутований масив: кожен елемент помножено на його індекс
const mutatedArray = originalArray.map((value, index) => value * index);

// Вивід нового масиву
console.log("Мутований масив:", mutatedArray);
