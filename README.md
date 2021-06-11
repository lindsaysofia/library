From The Odin Project

1. Setup skeleton files
  - No issues here :)
2. Add a function to the scripts (not constructor) which takes an input and stores new book objects into an array.
  - Created and no issues (yet)
3. Write a function that loops through the array and displays each book on the page.
  - wrote my displayLibrary function. Could it be written a lot better? Probably, but I didn't want to use "innerHTML" so I decided to create separate elements instead.
4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book.
  - button was added and works as intended (I hope!). I also added a "close" button in case we want to close the form
5. Add a button on each book’s display to remove the book from the library.
  - I added a "Remove" button to each book which calls the removeBook function to remove the book from the DOM and the library.
6. Add a button on each book’s display to change its read status
  - created toggleRead status. Each time a user clicks on the "read" or "not read", it will toggle the Book's read property as well as the book element's textContent
7. Used Local Storage to keep the library books as we refeshed.

Overall a fun project :)
