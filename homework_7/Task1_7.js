// Функція, яка буде викликатися при парному числі
function handleEven() {
  console.log("number is even");
}

// Функція, яка буде викликатися при непарному числі
function handleOdd() {
  console.log("number is odd");
}

// Основна функція, яка приймає число та два колбеки
function handleNum(number, onEven, onOdd) {
  if (number % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

// Виклик функції з прикладом числа та колбеків
handleNum(8, handleEven, handleOdd);
