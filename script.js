const booksList = document.querySelector('.books')

let myLibrary = [
    {
        title: 'The Big Short',
        author: 'Michael Jackson',
        pages: 356,
        readStatus: false,
    },
    {
        title: 'Radical Acceptance',
        author: 'Bridget Jones',
        pages: 410,
        readStatus: true,
    }
]

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;

        deleteBook = () => {

        }
    }
}

function addBookToLibrary() {
  // do stuff here
}