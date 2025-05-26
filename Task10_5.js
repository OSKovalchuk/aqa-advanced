class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // геттери/сеттери тут, якщо потрібно...
}

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  // Статичний метод для створення EBook з Book + формат файлу
  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Перший аргумент має бути екземпляром класу Book");
    }
    if (typeof fileFormat !== "string" || fileFormat.trim() === "") {
      throw new Error("Формат файлу має бути непорожнім рядком");
    }

    // Повертаємо новий екземпляр EBook
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

// Приклад використання:
const myBook = new Book("Кобзар", "Тарас Шевченко", 1840);
const myEBook = EBook.fromBook(myBook, "EPUB");

console.log(myEBook);
