// Modal Variables
const addButton = document.querySelector('.addButton');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.xBtn');

// Form Variables
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');

// Book Buttons
const mainContainer = document.querySelector('main');

mainContainer.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Read') {
        e.target.innerHTML = 'Not Read';
        e.target.style.backgroundColor = 'red';
    } else if (e.target.innerHTML === 'Not Read'){
        e.target.innerHTML = 'Read';
        e.target.style.backgroundColor = 'green';
    }

    if (e.target.className === 'delete') {
        e.target.parentNode.parentNode.remove();
    }
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);

    displayLastBook();
}

function displayLastBook() {
    const lastItem = myLibrary[myLibrary.length -1];
    const main = document.querySelector('main');
    const div = document.createElement('div');
    let read = '';

    if (lastItem.read == true) {
        lastItem.read = 'Read';
        read = 'green'
    } else {
        lastItem.read = 'Not Read';
        read = 'red';
    }

    // if lastItem.read == true => background color set as 'green'
    // if lastItem.read == false => background color set as 'red'
    
    div.classList.add('book-container');
    div.innerHTML = `
    <div class="title">Title - ${lastItem.title}</div>
        <div class="author">Author - ${lastItem.author}</div>
        <div class="pages">Pages - ${lastItem.pages}</div>
        <div class="btnContainer">
            <button class="read ${read}">${lastItem.read}</button>
            <button class="delete">Delete</button>
        </div>
    `;

    main.appendChild(div);

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

submitBtn.addEventListener('click', addBook);

addButton.addEventListener('click', () => {
    if (modal.style.display === 'none') {
        modal.style.display = 'grid';
        title.value = ''
        author.value = ''
        pages.value = ''
        read.checked = false;
    } else {
        modal.style.display = 'none';
    }
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
})