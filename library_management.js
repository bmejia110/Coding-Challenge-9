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