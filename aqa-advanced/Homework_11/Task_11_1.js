printTextWithDelay("Привіт!", 2000); // Виведе текст через 2 секунди
function printTextWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}
