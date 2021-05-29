let bookshelf = document.querySelector('.bookshelf');
let library = [];

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

// Adding a dummy book for now
let theSecretHistory = new Book('The Secret History', 'Donna Tartt', 537, false);
addBookToLibrary(theSecretHistory);

let animalFarm = new Book('Animal Farm', 'George Orwell', 144, true);
addBookToLibrary(animalFarm);

displayLibrary();

function displayLibrary() {
  library.forEach(book => {
    let newBook = document.createElement('div');
    newBook.classList.add('book');
    let newBookContainer = document.createElement('div');
    newBookContainer.classList.add('test');

    let newBookTitle = document.createElement('p');
    newBookTitle.classList.add('book-title');
    newBookTitle.textContent = `${book.title}`;
    let newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('book-author');
    newBookAuthor.textContent = `${book.author}`;

    newBookContainer.appendChild(newBookTitle);
    newBookContainer.appendChild(newBookAuthor);
    
    let newBookPages = document.createElement('p');
    newBookPages.classList.add('book-pages');
    newBookPages.textContent = `${book.numberOfPages} pages`;
    newBook.appendChild(newBookContainer);
    newBook.appendChild(newBookPages);
    bookshelf.appendChild(newBook);
  });
}