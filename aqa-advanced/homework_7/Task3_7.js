function divide(numerator, denominator) {
  // Перевірка, чи обидва аргументи є числами
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both numerator and denominator must be numbers');
  }

  // Перевірка на ділення на нуль
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero');
  }

  // Повертаємо результат ділення
  return numerator / denominator;
}

// Тестуємо функцію з різними значеннями
try {
  console.log(divide(10, 2));  // Очікується: 5
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide(10, 0));  // Очікується: помилка
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide('10', 2));  // Очікується: помилка
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена');
}
