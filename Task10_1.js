class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }
}

// Створюємо кілька об'єктів класу Book
const book1 = new Book("Місто", "Валер'ян Підмогильний", 1927);
const book2 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book3 = new Book("Захар Беркут", "Іван Франко", 1883);

// Викликаємо метод printInfo для кожного об'єкта
book1.printInfo();
book2.printInfo();
book3.printInfo();


        
