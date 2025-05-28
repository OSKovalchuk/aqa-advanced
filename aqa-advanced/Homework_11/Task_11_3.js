// Функція для отримання TODO
async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error(`Failed to fetch TODO: ${response.status}`);
  }
  return response.json();
}

// Функція для отримання USER
async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error(`Failed to fetch USER: ${response.status}`);
  }
  return response.json();
}

// Головна функція, яка використовує Promise.all та Promise.race
async function main() {
  try {
    // Виконуємо обидва запити одночасно
    const allResults = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all result:");
    console.log(allResults);

    // Отримуємо той результат, який прийде першим
    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race result:");
    console.log(firstResult);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
