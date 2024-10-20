// Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails() {  //method to return book details
        return "Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}";
    }

    get isAvailable() {  //getter for availability
        return this._isAvailable;
    }
    set isAvailable(status) {   //setter for availability 
        this._isAvailable = status;
    }
}

//Task 2: Create a Section Class

class section {
    constructor(name) {
        this.name = name;
        this.books = []; //array to store books
    }
    addBook(book) {   //method to add book to section
        this.books.push(book);
    }
    getAvailableBooks() {  //method to get total # of books
        return this.books.filter(book => book.isAvailable).length;
    }
    listBooks () {  //method to list all books in section with availability
        this.books.forEach(book => {
            const availability = book.isAvailable ? "Available" : "Borrowed";
            console.log("Title: ${book.title}, Availability: ${availability}");
        });
    }
}

//Task 3: Create a Patron Class

class Patron {
    constructor(name) {
        this.name = name;
        this.BorrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            this.BorrowedBooks.push(book);
            book.isAvailable = false;
            console.log( "${this.name} has borrowed "${book.title}"");
        } else {}
    }
}