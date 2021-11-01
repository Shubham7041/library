/*
Create a book via constructor
Add the Book to Array
Display the Book onto screen
*/
const AuthorInput = document.querySelector(".AuthorInput");
const TitleInput = document.querySelector(".TitleInput");
const NoOfPage = document.querySelector(".NoOfPage");
const ReadInput = document.querySelector("#Read");
const submitButton = document.getElementById("submitButton");
const display = document.getElementById("display");

// library to store data
let myLibrary = JSON.parse(localStorage.getItem("shelf")) || [];

//Constructor for book
class Book {
  constructor(Author, Title, Page, read) {
    this.Author = Author;
    this.Title = Title;
    this.Page = Page;
    this.read = read;
  }
  info() {
    return `${this.Author} ${this.Title} ${this.Page}`;
  }
}

function readtoggle(event) {
  let { target } = event;
  if (target.value == "Read") {
    target.value = "Not Read";
    target.innerHTML = "Not Read";
  } else {
    target.value = "Read";
    target.innerHTML = "Read";
  }
}
//demo input
//myLibrary.push(new Book("Marcus", "The Wind in the Sky", "188"));
//myLibrary.push(new Book("Alex", "Glow in the Shadow", "90"));
//localStorage.setItem("shelf", JSON.stringify(myLibrary));
//Loop through the library
function load() {
  myLibrary.forEach((book) => {
    let shelf = document.createElement("div");
    shelf.classList.add("book");
    display.appendChild(shelf);

    let title = document.createElement("h3");
    title.innerHTML = book.Title;
    shelf.appendChild(title);

    let author = document.createElement("p");
    author.innerHTML = `Author: ${book.Author}`;
    shelf.appendChild(author);

    let page = document.createElement("p");
    page.innerHTML = `Pages: ${book.Page}`;
    shelf.appendChild(page);

    let read = document.createElement("button");
    read.innerHTML = book.read;
    read.classList.add("button-style");
    shelf.appendChild(read);

    read.addEventListener("click", () => {
      if (book.read == "Read") {
        book.read = "Not Read";
      } else {
        book.read = "Read";
      }
      localStorage.setItem("shelf", JSON.stringify(myLibrary));
    });

    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.classList.add("button-style");
    shelf.appendChild(remove);

    remove.addEventListener("click", () => {
      display.removeChild(shelf);
      myLibrary.splice(book, 1);
      localStorage.setItem("shelf", JSON.stringify(myLibrary));
    });
  });
}

//eventlistener to get a value for ReadInput
ReadInput.addEventListener("click", (event) => {
  let { target } = event;
  if (target.value == "Read") {
    target.value = "Not Read";
    target.innerHTML = "Not Read";
  } else {
    target.value = "Read";
    target.innerHTML = "Read";
  }
});

submitButton.addEventListener("click", () => {
  //all the input from user
  let shelf = document.createElement("div");
  shelf.classList.add("book");
  display.appendChild(shelf);

  let title = document.createElement("h3");
  title.innerHTML = TitleInput.value;
  shelf.appendChild(title);

  let author = document.createElement("p");
  author.innerHTML = AuthorInput.value;
  shelf.appendChild(author);

  let page = document.createElement("p");
  page.innerHTML = NoOfPage.value;
  shelf.appendChild(page);

  let read = document.createElement("button");
  read.innerHTML = ReadInput.innerHTML;
  shelf.appendChild(read);

  //create anew book
  let NewBook = new Book(
    AuthorInput.value,
    TitleInput.value,
    NoOfPage.value,
    ReadInput.innerHTML
  );
  myLibrary.push(NewBook);
  //stringify the shelf and store it in local storage
  localStorage.setItem("shelf", JSON.stringify(myLibrary));
});

window.addEventListener("load", load());
