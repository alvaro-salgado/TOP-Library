const btnAddBook = document.querySelector('.btn-add-book');
const bookDialog = document.getElementById('book-dialog');
const bookData = document.querySelector('.book-form');
const submitButton = document.querySelector('.book-submit-btn')

console.log(bookData);


const myLibrary = [];


//Show the dialog

btnAddBook.addEventListener('click', () =>{
    bookDialog.showModal();
})




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

function addBookToLibrary (title, author, pagesNo, isRead){
    const book = new Book(title, author, pagesNo, isRead);
    myLibrary.push(book);
}

// const book1 = new Book('Hobbit','Me',164, false);

// console.log(book1.info());

// console.log(myLibrary)
// addBookToLibrary('Harry Potter', 'JK Rowling','234',false)
// addBookToLibrary('Harry', 'JK Rowling','234',false)

// console.log(myLibrary[1].title)