class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() { return this._title; }
  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги має бути непорожнім рядком');
    }
    this._title = value;
  }

  get author() { return this._author; }
  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор має бути непорожнім рядком');
    }
    this._author = value;
  }

  get year() { return this._year; }
  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Рік видання має бути додатнім цілим числом');
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }

  // Статичний метод для пошуку найдавнішої книги
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Масив книг не може бути порожнім");
    }
    // Знаходимо книгу з мінімальним роком видання
    return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
  }
}

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() { return this._fileFormat; }
  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу має бути непорожнім рядком');
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
  }
}

// Створюємо кілька об'єктів Book та EBook
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);
const ebook1 =  new EBook("Аліса в країні чудес", "Льюїс Керролл", 1865, "EPUB")
const ebook2 = new EBook("Гаррі Поттер", "Джоан Роулінг", 1997, "MOBI");

// Масив книг
const booksArray = [book1, book2, ebook1, ebook2];

// Виклик статичного методу
const oldestBook = Book.findOldestBook(booksArray);

// Виводимо інформацію про найстарішу книгу
oldestBook.printInfo();
