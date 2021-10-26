/*
Create a book via constructor
Add the Book to Array
Display the Book onto screen
*/
const AuthorInput = document.querySelector(".AuthorInput");
const TitleInput = document.querySelector(".TitleInput");
const NoOfPage = document.querySelector(".NoOfPage");
const submitButton = document.getElementById("submitButton");

let myLibrary = [];

//Constructor for book
function Book(Author, Title, NoOfPage) {
  this.Author = Author;
  this.Title = Title;
  this.NoOfPage = NoOfPage;
}
//myLibrary.push(new Book("Marcus", "The Wind in the Sky", "188"));
//myLibrary.push(new Book("Alex", "Glow in the Shadow", "90"));

submitButton.addEventListener("click", () => {
  const author = AuthorInput.value;
  const title = TitleInput.value;
  const numberofpage = NoOfPage.value;
  const NewBook = new Book(author, title, numberofpage);
  myLibrary.push(NewBook);
});
