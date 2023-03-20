/* Books add button listener session */
function booksStartListener(button) {
    button.addEventListener("mouseover", () => {
        label = document.getElementById('books-label-button')
        label.style.display = 'inline'
    })
    button.addEventListener("mouseout", () => {
        label = document.getElementById('books-label-button')
        label.style.display = 'none'
    })
}

showBooks()

async function showBooks() {
    // limpar cache
    localStorage.setItem("bookSelected", null);
    try {
        books = await getBooks()
        console.log(books)

        result =""

        books.forEach(book => {
            result += 
            `<div class="table-row" onclick="editItem(${book.id})">
                <div class="table-cell">
                    <div class="primary-cell">${book.title}</div>
                    <div class="secondary-cell">${book.bookCode}</div>
                </div>
                <div class="table-cell center">
                    <div class="primary-cell">${book.publisher}</div>
                    <div class="secondary-cell">${book.releaseYear}</div>
                    
                </div>
                <div class="table-cell">
                    <div class="primary-cell">${book.author}</div>
                </div>
            </div>
            `
        });
        table = document.getElementById('table')
        table.innerHTML = result

    } catch (error) {
        console.error

    } finally {
       
    }

}


// Service Session
async function getBooks() {
    //let overlay = document.getElementById("overlay");
    //overlay.style.display = "none"
    //formElement = document.forms.searchRecipe
    //formData = new FormData(formElement)
    params = { title: '' }

    const res = await axios.get('http://localhost:8081/book', { params: params })
    console.log(res)
    data = res.data

    return data
}

function editItem(bookID) {
    book = books.filter(book => book.id == bookID)
    book = book[0]
    book.editMode = true
    debugger
    localStorage.setItem("bookSelected", JSON.stringify(book));
    window.location.replace('/details/details.html');
    
}
