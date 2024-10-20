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

//Task 4: Create a VIPatron Class that Inherits from Patron 

class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name);
        this.priority = priority;
    }
    borrowBook(book) {
        if (book.isBookAvailable()) {
        book.setAvailability(false);
        this.BorrowedBooks.push(book);
        console.log("${this.name} borrowed $(book.title}.");
        } else {
            console.log("{book.title} is not available");
        }
    }
}

//Task 6: Create and Manage Sections and Patrons

//creating books
const book1 = new Book("The Intelligent Investor", "Benjamin Graham", "0987654321");
const book2 = new Book("Principles", "Ray Dalio", "5566778899");
const book3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "0011223344");
const book4 = new Book("The Richest Man in Babylon", "George S. Clason", "667778890");

//creating sections
const economicsSection = new Section("Economics");
const investingSection = new Section("Investing");

// Assigning to sections

economicsSection.addBook(book1);
economicsSection.addBook(book2);
investingSection.addBook(book3);
investingSection.addBook(book4);

//creating patrons

const patron = new Patron("Alex Gomez")
const vipPatron = new VIPPatron("Trader Joe", true);

//patrons borrow and return books

patron.borrowBook(book1);
vipPatron.borrowBook(book3);
vipPatron.returnBook(book3);
