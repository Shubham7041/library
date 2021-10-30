/*
Create a book via constructor
Add the Book to Array
Display the Book onto screen
*/
const AuthorInput = document.querySelector(".AuthorInput");
const TitleInput = document.querySelector(".TitleInput");
const NoOfPage = document.querySelector(".NoOfPage");
const submitButton = document.getElementById("submitButton");
const display = document.getElementById("display");

//shelf to store temporary data
let shelf = [];
let myLibrary = JSON.parse(localStorage.getItem("shelf")) || [];

//Constructor for book
class Book {
  constructor(Author, Title, Page) {
    this.Author = Author;
    this.Title = Title;
    this.Page = Page;
  }
  info() {
    return `${this.Author} ${this.Title} ${this.Page}`;
  }
}
//demo input
//myLibrary.push(new Book("Marcus", "The Wind in the Sky", "188"));
//myLibrary.push(new Book("Alex", "Glow in the Shadow", "90"));

//Loop through the library
myLibrary.forEach((book) => {
  let shelf = document.createElement("div");
  shelf.classList.add("book");
  display.appendChild(shelf);

  let author = document.createElement("p");
  author.innerHTML = book.Author;
  shelf.appendChild(author);

  let title = document.createElement("p");
  title.innerHTML = book.Title;
  shelf.appendChild(title);

  let page = document.createElement("p");
  page.innerHTML = book.Page;
  shelf.appendChild(page);
});

submitButton.addEventListener("click", () => {
  //all the input from user
  const author = AuthorInput.value;
  const title = TitleInput.value;
  const numberofpage = NoOfPage.value;
  //create anew book
  let NewBook = new Book(author, title, numberofpage);
  shelf.push(NewBook);
  //stringify the shelf and store it in local storage
  let shelf_serialized = JSON.stringify(shelf);
  localStorage.setItem("shelf", shelf_serialized);
});
