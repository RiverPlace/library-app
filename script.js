const booksList = document.querySelector('.books')
const addBookButton = document.getElementById('add-book')
const bookFormInputs = document.getElementsByClassName('book-form-input')

addBookButton.addEventListener('click', addBook)

class Library {
    constructor() {
        this.books = []
    }

    addBook(newBook) {
        if (!this.inInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook(book) {
        this.books = this.books.filter(book => book.title !== title)
    }

    getBook(title) {
        return this.books.find(book => book.title === title)
    }

    inInLibrary(newBook) {
        return this.books.some(book => book.title === newBook.title)
    }
}

const library = new Library()

class Book {
    constructor(title, author, pages, isRead = false) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

function createBook() {
    let title = document.getElementById('title-input').value
    let author = document.getElementById('author-input').value
    let pages = document.getElementById('pages-input').value
    return new Book(title, author, pages)
}

function addBook() {
    const newBook = createBook()

    if (library.inInLibrary(newBook.title)) {
        // Add error message
        return
    } else {
        library.addBook(newBook)
        updateBooksList()
        clearForm()
    }
}

function createBookItem(book) {
    const bookItem = document.createElement('div')
    const bookInfoGroup = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btnGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookItem.classList.add('list-group-item')
    bookItem.dataset.listItem = book.title
    btnGroup.classList.add('buttons-container')
    readBtn.classList.add('read-toggle')
    readBtn.dataset.readTitle = book.title
    removeBtn.classList.add('remove-book')
    removeBtn.dataset.deleteTitle = book.title
    readBtn.onclick = toggleRead
    removeBtn.onclick = removeBook

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    removeBtn.textContent = 'Delete'

    if (book.isRead) {
        readBtn.textContent = 'Read'
        readBtn.style.backgroundColor = 'green'
    } else {
        readBtn.textContent = 'Not read'
        readBtn.style.backgroundColor = 'white'
    }

    bookItem.appendChild(bookInfoGroup)
    bookInfoGroup.appendChild(title)
    bookInfoGroup.appendChild(author)
    bookInfoGroup.appendChild(pages)
    bookItem.appendChild(btnGroup)
    btnGroup.appendChild(readBtn)
    btnGroup.appendChild(removeBtn)
    bookItem.appendChild(btnGroup)
    booksList.appendChild(bookItem)
}

const removeBook = (e) => {
    let dataTitle = e.target.getAttribute('data-delete-title')
    let bookItem = document.querySelector(`[data-list-item="${dataTitle}"`)
    bookItem.remove()
}

const toggleRead = (e) => {
    let title = e.target.getAttribute('data-read-title')
    let book = library.getBook(title)
    book.isRead = !book.isRead
    updateBooksList()
}

function updateBooksList() {
    booksList.innerHTML = ''
    for (let book of library.books) {
        createBookItem(book)
    }
}

function clearForm() {
    for (let input of bookFormInputs) {
        input.value = ''
    }
}

updateBooksList()