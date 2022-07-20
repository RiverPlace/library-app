const booksList = document.querySelector('.books')
const addBookButton = document.getElementById('add-book')
const bookFormInputs = document.getElementsByClassName('book-form-input')

addBookButton.addEventListener('click', addBook)

let myLibrary = []

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
    let title = document.getElementById('title-input').value
    let author = document.getElementById('author-input').value
    let pages = document.getElementById('pages-input').value

    if (!title || !author || !pages) {
        return
    }

    let book = {
        title,
        author,
        pages: Number(pages),
    }
    myLibrary.push(book)
    displayBooks()
    clearForm()
}

function getBookNode(book) {
    let bookNode = document.createElement('div')
    bookNode.classList.add('list-group-item')
    bookNode.innerHTML = `
        <div class="book-info">
            <h4 id="book-title">${book.title}</h4>
            <p>Author: ${book.author}, Pages: ${book.pages}</p>
        </div>
        <div class="buttons-container">
            <button class="btn btn-default read-status">Read</button>
            <button class="btn btn-danger remove-book">X</button>
        </div>
    `
    return bookNode
}

function displayBooks() {
    booksList.innerHTML = ''
    for (let book of myLibrary) {
        let bookNode = getBookNode(book)
        booksList.appendChild(bookNode)
    }
}

function clearForm() {
    for (let input of bookFormInputs) {
        input.value = ''
    }
}

displayBooks()


