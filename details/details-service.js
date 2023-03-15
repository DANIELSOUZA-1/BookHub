async function getRecipes() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none"
    formElement = document.forms.searchRecipe
    formData = new FormData(formElement)
    params = { title: formData.get('title'), level: formData.get('level') }

    const res = await axios.get('http://localhost:8081/recipe', { params: params });
    console.log(res)
    data = res.data

    return formatRecipes(data)
}

async function deleteItem(id) {
    params = { id: id }

    const res = await axios.delete('http://localhost:8081/recipe', { params: params });
    return getRecipes()
}

async function editItem(id) {
    itemToEdit = await axios.get('http://localhost:8081/recipe', { params: { id: id } });
    item = itemToEdit.data
    return overlay(item)
}

function overlay(item = null, action = "open") {
    let overlay = document.getElementById("overlay");
    if (item) {
        form = document.getElementById("recipe")
        form['id'].value = item.id
        form["title"].value = item.title
        form["level"].value = item.level
        form["imgLink"].value = item.imgLink
        form["description"].value = item.description
    }

    if (action == "open") {
        overlay.style.display = "grid";
    } else {
        overlay.style.display = "none";
    }
}

async function sendEdit() {
    formElement = document.forms.recipe
    formData = new FormData(formElement)
    params = { id: formData.get('id'), title: formData.get('title'), level: formData.get('level'), description: formData.get('description'), imgLink: formData.get('imgLink') }

    const res = await axios.get('http://localhost:8081/editRecipe', { params }).then(getRecipes())
}