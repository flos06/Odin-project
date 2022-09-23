// create array for library
let library = [];
const form = document.querySelector(".addBookForm")
form.addEventListener('submit', formData)

// constructor for books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
// function to add book to array
function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read)
    library.push(book)
    displayBooks()
}

// check if checkbox checked or not
const checkB = document.querySelector('#read')
checkB.addEventListener('change', checked)
function checked(){
    if (checkB.checked) {
        checkB.value = 'Yes'
    } else {
        checkB.value = 'No'
    }
}


function displayBooks(){
    const books = document.querySelector('.books');

    // remove prev displayed cards so they dont show up twice
    const removeDiv = document.querySelectorAll(".card")
    for (let i = 0; i < removeDiv.length; i ++){
        removeDiv[i].remove();
    }
    let index = 0
    library.forEach(myLibrary => {
        const card = document.createElement("div")
        card.classList.add('card')
        books.appendChild(card)
        // create a remove button
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn")
        removeBtn.textContent = 'Delete from library'

        //link data to card array
        removeBtn.dataset.linkedArray = index;
        
        card.appendChild(removeBtn)

        removeBtn.addEventListener('click', remBook)
        function remBook() {
            let getBook = removeBtn.dataset.linkedArray;
            library.splice(parseInt(getBook), 1);
            card.remove()
            displayBooks();
        }
        // create read button
        const read = document.createElement("button");
        read.classList.add("readBtn");
        read.textContent = "Toggle read"
        read.dataset.linkedArray = index;
        card.append(read)

        read.addEventListener("click", toggle)
        function toggle() {
            let whatBookToggle = read.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype)
            const toggleBook = new Book()

            // what is read value?
            if ((library[parseInt(whatBookToggle)].read) == 'Yes') {
                toggleBook.read = 'No'
                library[parseInt(whatBookToggle)].read = toggleBook.read
            } else if ((library[parseInt(whatBookToggle)].read) == 'No') {
                toggleBook.read = 'Yes'
                library[parseInt(whatBookToggle)].read = toggleBook.read
            }
            displayBooks()
        }


        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`)
            const text = document.createElement('p');
            text.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(text);
        }
        index++;
    })
    checkB.value = 'No'
}

const submit = document.querySelector('.submitBtn')
submit.addEventListener("click", formData)

function formData() {
    let title = document.getElementById("title").value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value

  
    addBookToLibrary(title, author, pages, read)

    // get rid of form after submit
    document.getElementById("addBook").reset()
    // hide form
    form.classList.add("hidden")
}

const reset = document.querySelector(".reset")
reset.addEventListener("click", resetForm)
function resetForm() {
    document.getElementById("addBook").reset()
}

console.log(library)

// hide the form

//display.addEventListener('click', visiForm)

const onAdd = document.querySelector('.addBookBtn')
onAdd.addEventListener('click', visible)

function visible() {
    visiForm(form)
}

function visiForm(event){
    event.classList.remove('hidden')
}