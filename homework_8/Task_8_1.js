// Масив чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// Змінні для підрахунку
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Цикл для перевірки кожного елемента
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

// Вивід результатів у консоль
console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);
