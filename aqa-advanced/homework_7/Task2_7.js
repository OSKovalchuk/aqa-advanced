function countdown(num) {
  console.log(num);

  if (num <= 0) {
    return; // зупинка рекурсії
  }

  countdown(num - 1); // рекурсивний виклик
}

// Виклик функції з початковим значенням 5
countdown(5);
