const btnAddBook = document.querySelector('.btn-add-book');
const bookDialog = document.getElementById('book-dialog');
const bookData = document.querySelector('.book-form');
const submitButton = document.querySelector('.book-submit-btn');
const bookContainer = document.querySelector('.book-container');
let deleteButton = document.querySelectorAll('.book-delete');


// console.log(deleteButton);


const myLibrary = [];


//Show the dialog

btnAddBook.addEventListener('click', () =>{
    bookDialog.showModal();
})

//Get the Book information

submitButton.addEventListener('click', () =>{
    const book = createBook(bookData.childNodes[3].value,
        bookData.childNodes[7].value,
        bookData.childNodes[11].value,
        bookData.childNodes[15].checked)
        deleteButton = document.querySelectorAll('.book-delete')

    addBookToLibrary(book);
    createBookBox();
    clearForm();
    console.log(myLibrary);
    console.log(deleteButton);


});

deleteButton.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        button.parentElement.remove();
    })
});






// Book Object constructor 
function Book (title, author, pagesNo, isRead){
    this.title = title;
    this.author = author;
    this.pages = pagesNo;
    this.isRead = isRead;
    this.info = function(){
        const textInfo = '';
        if (isRead == true){
            return `${title} by ${author}, ${pagesNo} pages, read`;
        }else
        return `${title} by ${author}, ${pagesNo} pages, not read`;
    }
}

function createBook(title, author, pagesNo, isRead){
    const book = new Book(title, author, pagesNo, isRead);
    return book;
}

// Adding books to library
function addBookToLibrary (book){
    myLibrary.push(book);
}

function clearForm (){
    bookData.childNodes[3].value = '';
    bookData.childNodes[7].value = '';
    bookData.childNodes[11].value = '';
    bookData.childNodes[15].checked = '';
}

function createBookBox (){
    const bookCard = document.createElement('div');

    const isRead = bookData.childNodes[15].checked == true ? 'Read':'Not Read'

    bookCard.classList.add('book-card');
    bookCard.innerHTML = `<p class="book-title">${bookData.childNodes[3].value}</p>
    <p class="book-author">By ${bookData.childNodes[7].value}</p>
    <p class="book-pages">Pages: ${bookData.childNodes[11].value}</p>
    <button class="book-read-btn">${isRead}</button>
    <button class="book-delete" id="btn-delete">Delete</button>`
    bookContainer.appendChild(bookCard);
}


// const book1 = new Book('Hobbit','Me',164, false);

// console.log(book1.info());

// console.log(myLibrary)
// addBookToLibrary('Harry Potter', 'JK Rowling','234',false)
// addBookToLibrary('Harry', 'JK Rowling','234',false)

// console.log(myLibrary[1].title)