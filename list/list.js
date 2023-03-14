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
