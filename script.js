let bookshelf = document.querySelector('.bookshelf');
const addBookButton = document.querySelector('.add-book-button');
const closeFormButton = document.querySelector('.close-form-button');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('form');
const header = document.querySelector('.header');
const headerContent = 'LIBRARY';

let library = (window.localStorage.library !== 'undefined') && (window.localStorage.library) ? JSON.parse(window.localStorage.library) : [];
let bookColors = ['#20639B', '#3CAEA3', '#F6D55C', '#ED553B'];

displayLibrary();

headerContent.split('').forEach(letter => {
  let p = document.createElement('p');
  p.textContent = letter;
  header.appendChild(p);
});

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this. numberOfPages = numberOfPages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.numberOfPages}, ${this.read ? 'already read' : 'not read yet'}`;
}

function addBookToLibrary(book) {
  library.push(book);
  window.localStorage.setItem('library', JSON.stringify(library));
}

addBookButton.addEventListener('click', addBook);
closeFormButton.addEventListener('click', closeForm);
form.addEventListener('submit', handleSubmit);

function displayLibrary() {
  bookshelf.innerHTML = '';
  library.forEach((book, index) => {
    let newBook = document.createElement('div');
    newBook.classList.add('book');

    let verticalContainer = document.createElement('div');
    verticalContainer.classList.add('vertical-container');

    let newBookTitle = document.createElement('p');
    newBookTitle.classList.add('book-title');
    newBookTitle.textContent = `${book.title}`;

    let newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('book-author');
    newBookAuthor.textContent = `${book.author}`;

    verticalContainer.appendChild(newBookTitle);
    verticalContainer.appendChild(newBookAuthor);
    
    let newBookPages = document.createElement('p');
    newBookPages.classList.add('book-pages');
    newBookPages.textContent = `${book.numberOfPages} pages`;

    let newBookRead = document.createElement('p');
    newBookRead.classList.add('book-read');
    newBookRead.textContent = `${book.read? 'Read' : 'Not Read'}`;
    newBookRead.dataset.index = index;
    newBookRead.addEventListener('click', toggleReadStatus);

    let newBookDeleteButton = document.createElement('button');
    newBookDeleteButton.dataset.index = index;
    newBookDeleteButton.classList.add('remove-button');
    newBookDeleteButton.textContent = 'Remove';
    newBookDeleteButton.addEventListener('click', removeBook);

    newBook.appendChild(verticalContainer);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookRead);
    newBook.appendChild(newBookDeleteButton);

    bookshelf.appendChild(newBook);

    newBook.style.backgroundColor = bookColors[index % (bookColors.length)];
    newBook.title = `"${book.title}" by ${book.author}`;
  });
}

function removeBook(e) {
  let index = e.target.dataset.index;
  let domChildren = document.querySelectorAll('.book');
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      bookshelf.removeChild(domChildren[index]);
    }
  };
  library.splice(index, 1);
  window.localStorage.setItem('library', JSON.stringify(library));
  displayLibrary();
}

function addBook(e) {
  formContainer.classList.add('active');
  formContainer.style.top = `${bookshelf.offsetTop}px`
}

function closeForm() {
  formContainer.classList.remove('active');
}

function handleSubmit(e) {
  e.preventDefault();
  let title = e.target[0].value;
  let author = e.target[1].value;
  let pages = e.target[2].value;
  let read = e.target[3].checked;
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  window.localStorage.setItem('library', JSON.stringify(library));
  displayLibrary();
  closeForm();
  form.reset();
}

function toggleReadStatus(e) {
  let index = e.target.dataset.index;
  let book = library[index];
  book.read = !book.read;
  e.target.textContent = (book.read ? 'Read' : 'Not Read');
  window.localStorage.setItem('library', JSON.stringify(library));
}