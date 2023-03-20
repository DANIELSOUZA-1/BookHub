data = JSON.parse(localStorage.getItem("bookSelected"))
editMode = data ? data.editMode : false

if (editMode) {
    form = document.getElementById("book")
    form["title"].value = data.title
    form["bookCode"].value = data.bookCode
    form["author"].value = data.author
    form["publisher"].value = data.publisher
    form["releaseYear"].value = data.releaseYear

    debugger

    deleteButton = document.getElementById("delete-button")
    deleteButton.style.display = 'inline'
}

async function onSubmit() {
    debugger
    body = getFormBody()

    if (!editMode) {
        await create(body)

    } else {
        await patch(body)
    }

}

async function create(body) {
    await axios.post('http://localhost:8081/book', body)
        .then(function (response) {
            debugger
            console.log(response);
            goToList()
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function patch(body) {
    await axios.patch('http://localhost:8081/book', body).then(goToList())
}

async function remove() {
    debugger
    body = getFormBody()
    await axios.delete('http://localhost:8081/book', {params: {id: body.id}}).then(goToList())
}

function getFormBody() {
    formElement = document.forms.book
    formData = new FormData(formElement)
    body = {
        id: data? data.id : null,
        title: formData.get('title'),
        bookCode: formData.get('bookCode'),
        author: formData.get('author'),
        publisher: formData.get('publisher'),
        releaseYear: formData.get('releaseYear'),
    }
    return body
}

function goToList() {
    window.location.replace('/list/list.html');

}
