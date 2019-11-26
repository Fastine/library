let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}


//Generate two books and add to library
function populateLibrary() {
    if (myLibrary.length == 0) {
        let book1 = new Book("Ender's Game", "Orson Scott Card", 324, true)
        let book2 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 174, false)
        myLibrary.push(book1, book2)
    }
}

function render() {
    let card = document.createElement('div')
    myLibrary.forEach(item => {
        card.className = 'card';
        card.innerHTML = 
            `<p>Title: ${item.title}</p>
            <p>Author: ${item.author}</p>
            <p>Pages: ${item.pages}</p>
            <p>Read: ${item.read}</p>`
        container.append(card);
    })
}

populateLibrary();
render();