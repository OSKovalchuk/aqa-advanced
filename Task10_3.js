class Book {
  constructor(title, author, year) {
    this.title = title;   // Викликається сеттер
    this.author = author;
    this.year = year;
  }

  // Геттери
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  // Сеттери з валідацією
  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги має бути непорожнім рядком');
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор має бути непорожнім рядком');
    }
    this._author = value;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Рік видання має бути додатнім цілим числом');
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }
}

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;  // Викликається сеттер
  }

  get fileFormat() {
    return this._fileFormat;
  }

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

// Приклад використання:
try {
  const myEbook = new EBook("Хмарочос", "Анна Багряна", 2023, "PDF");

  console.log(myEbook.title);       // Отримати назву
  myEbook.title = "Новий заголовок"; // Встановити нову назву

  myEbook.printInfo();

  // Спроба поставити неправильне значення:
  // myEbook.year = -5;  // Помилка!
} catch (error) {
  console.error(error.message);
}
