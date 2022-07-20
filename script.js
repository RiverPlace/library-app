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

for (let book of myLibrary) {
    let bookNode = getBookNode(book)
    console.log('Node: ', bookNode)
    booksList.appendChild(bookNode)
}

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

function getBookNode(book) {
    let bookNode = document.createElement('div')
    bookNode.classList.add('list-group-item')
    bookNode.innerHTML = `
        <div class="list-item">
            <h4 id="book-title">${book.title}</h4>
            <p>Author: ${book.author}, Pages: ${book.pages}</p>
        </div>
        <div class="button-container">
            <button class="btn btn-default read-status">Read</button>
            <button class="btn btn-danger remove-book">X</button>
        </div>
    `
    return bookNode
}