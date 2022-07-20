const booksList = document.querySelector('.books')
const addBookButton = document.querySelector('.add-book')


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

function addBook() {

}

function addBookToLibrary(book) {
    return `

    `
}