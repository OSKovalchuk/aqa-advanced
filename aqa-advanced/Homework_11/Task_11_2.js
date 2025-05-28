

// Функція для отримання TODO
function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .catch(error => {
      console.error("Помилка при отриманні TODO:", error);
      throw error;
    });
}

// Функція для отримання USER
function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => {
      console.error("Помилка при отриманні USER:", error);
      throw error;
    });
}

// Promise.all — чекає, поки всі обіцянки виконаються
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("=== Promise.all результат ===");
    console.log("TODO:", todo);
    console.log("USER:", user);
  })
  .catch(error => {
    console.error("Помилка в Promise.all:", error);
  });

// Promise.race — повертає перший завершений результат
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log("=== Promise.race результат ===");
    console.log(result);
  })
  .catch(error => {
    console.error("Помилка в Promise.race:", error);
  });
