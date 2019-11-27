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
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
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
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    myLibrary.forEach(item => {
        let card = document.createElement('div')
        card.className = 'card';
        card.setAttribute('data-key', `${myLibrary.indexOf(item)}`)
        card.innerHTML = 
            `<p>Title: ${item.title}</p>
            <p>Author: ${item.author}</p>
            <p>Pages: ${item.pages}</p>
            <p>Read: ${item.read}</p>`
        container.append(card);
    })
}

function openForm() {
    document.getElementById("newBookForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("newBookForm").style.display = "none";
}

function newBook() {

}

populateLibrary();
render();