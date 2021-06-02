let bookshelf = document.querySelector('.bookshelf');
const header = document.querySelector('.header');
const headerContent = 'LIBRARY';
let library = [];
let bookColors = ['#C33', '#EE8', '#FFC', '#EED', '#F74'];

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

// Adding a dummy book for now
let theSecretHistory = new Book('The Secret History verttt long very long name The Secret History verttt long very long name', 'Donna Tartt he Secret History verttt long very long name The Secret History verttt long very long name', 537, false);
addBookToLibrary(theSecretHistory);

let animalFarm = new Book('Animal Farm', 'George Orwell', 144, true);
addBookToLibrary(animalFarm);

let theSecretHistory2 = new Book('The Secret History', 'Donna Tartt', 537, false);
addBookToLibrary(theSecretHistory2);

let animalFarm2 = new Book('Animal Farm', 'George Orwell', 144, true);
addBookToLibrary(animalFarm2);

let theSecretHistory23 = new Book('The Secret History', 'Donna Tartt', 537, false);
addBookToLibrary(theSecretHistory23);
addBookToLibrary(theSecretHistory);
addBookToLibrary(theSecretHistory);

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
    newBookPages.textContent = `${book.numberOfPages} pages / ${book.read? 'Read' : 'Not Read'}`;

    let newBookDeleteButton = document.createElement('button');
    newBookDeleteButton.dataset.index = index;
    newBookDeleteButton.classList.add('remove-button');
    newBookDeleteButton.textContent = 'Remove';
    newBookDeleteButton.addEventListener('click', removeBook);

    newBook.appendChild(verticalContainer);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookDeleteButton);

    bookshelf.appendChild(newBook);

    newBook.style.backgroundColor = bookColors[index % (bookColors.length)];
    newBook.title = book.title;
  });
}

function removeBook(e) {
  console.log(e.target.dataset.index);
}