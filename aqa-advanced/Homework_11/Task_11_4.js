class TodoService {
  // Метод для отримання TODO
  async fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`Failed to fetch TODO: ${response.status}`);
    }
    return response.json();
  }
}

class UserService {
  // Метод для отримання USER
  async fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(`Failed to fetch USER: ${response.status}`);
    }
    return response.json();
  }
}

// Приклад використання
async function main() {
  const todoService = new TodoService();
  const userService = new UserService();

  try {
    // Promise.all — виконуємо обидва запити одночасно
    const allResults = await Promise.all([
      todoService.fetchTodo(),
      userService.fetchUser()
    ]);
    console.log("Promise.all result:");
    console.log(allResults);

    // Promise.race — той результат, що прийде першим
    const firstResult = await Promise.race([
      todoService.fetchTodo(),
      userService.fetchUser()
    ]);
    console.log("Promise.race result:");
    console.log(firstResult);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
