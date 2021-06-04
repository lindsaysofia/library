let bookshelf = document.querySelector('.bookshelf');
const addBookButton = document.querySelector('.add-book-button');
const closeFormButton = document.querySelector('.close-form-button');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('form');
const header = document.querySelector('.header');
const headerContent = 'LIBRARY';
let library = [];
let bookColors = ['#20639B', '#3CAEA3', '#F6D55C', '#ED553B'];

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

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.numberOfPages}, ${this.read ? 'already read' : 'not read yet'}`;
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

addBookButton.addEventListener('click', addBook);
closeFormButton.addEventListener('click', closeForm);
form.addEventListener('submit', handleSubmit);

// Adding a dummy book for now
let theSecretHistory = new Book('The Secret History verttt long very long name The Secret History verttt long very long name', 'Donna Tartt he Secret History verttt long very long name The Secret History verttt long very long name', 537, false);
addBookToLibrary(theSecretHistory);

let animalFarm = new Book('Animal Farm', 'George Orwell', 144, true);
addBookToLibrary(animalFarm);

displayLibrary();

function displayLibrary() {
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
  bookshelf.innerHTML = '';
  displayLibrary();
}

function addBook(e) {
  formContainer.classList.add('active');
  formContainer.style.top = `${bookshelf.offsetTop}px`
}

function closeForm(e) {
  formContainer.classList.remove('active');
}

function handleSubmit(e) {
  e.preventDefault();
}