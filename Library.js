console.log("Welcome to Vidya Library");

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    //To add the book in the table
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
  }

  clear() {
    //To clear the form box from previous entry
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }

  validate(book) {
    //To check whether book or author is valid or not
    if (book.name.length < 3 || book.author.length < 3) {
      return false;
    } else return true;
  }

  show(type, displayMessage) {
    //To display message of success or error
    let boldText;
    if (type == "Success") {
      boldText = "Success";
    } else {
      boldText = "Error!";
    }

    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-info" role="alert">
                         <strong>${boldText}:</strong> ${displayMessage}
                         </div>`;

    setTimeout(function () {
      message.innerHTML = "";
    }, 3000);
  }
}

//Adding Event Listener to the 'Add Book' Button
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submited the form"); //To check initially whether event listener works or not
  let name = document.getElementById("bookName").value;
  console.log(name);
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("Fiction");
  let romance = document.getElementById("Romance");
  let mystery = document.getElementById("Mystery");
  let programming = document.getElementById("Programming");
  let cooking = document.getElementById("Cooking");

  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (romance.checked) {
    type = romance.value;
  }
  else if (mystery.checked) {
    type = mystery.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  //console.log(book); //For self understanding

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Success", "Your Book has been successfully added");
  } else {
    display.show("Error!", "This Book can not be added");
  }

  e.preventDefault();
}
