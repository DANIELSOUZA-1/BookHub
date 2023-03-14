/* Receitas listener session */
function booksStartListener(button) {
    button.addEventListener("mouseover", () => {
        debugger
        label = document.getElementById('books-label-button')
        label.style.display = 'inline'
    })
    button.addEventListener("mouseout", () => {
        debugger
        label = document.getElementById('books-label-button')
        label.style.display = 'none'
    })
}