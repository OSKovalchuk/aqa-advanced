
const users = [
  { name: "Andrii", email: "andrii@gmail.com", age: 30 },
  { name: "Mary", email: "maria@gmail.com", age: 25 },
  { name: "Oleh", email: "oleg@gmail.com", age: 35 }
];


for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
