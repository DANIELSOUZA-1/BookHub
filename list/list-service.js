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