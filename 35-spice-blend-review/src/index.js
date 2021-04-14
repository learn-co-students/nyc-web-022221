// write your code here
const updateTitleForm = document.querySelector('form#update-form')


fetch('http://localhost:3000/spiceblends/1')
    .then(response => response.json())
    .then(spiceBlendObj => {
        const detailImg = document.querySelector('img.detail-image')
        detailImg.src = spiceBlendObj.image

        const detailH2 = document.querySelector('h2.title')
        detailH2.textContent = spiceBlendObj.title

        spiceBlendObj.ingredients.forEach(ingredientObj => {
            const li = document.createElement('li')
            li.textContent = ingredientObj.name

            const ingredientsUl = document.querySelector('ul.ingredients-list')
            ingredientsUl.append(li)
        })
    })




updateTitleForm.addEventListener('submit', event => {
    event.preventDefault()

    const title = event.target.title.value

    console.log(title)

    fetch('http://localhost:3000/spiceblends/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
        .then(response => response.json())
        .then(updatedObj => {
            const detailH2 = document.querySelector('h2.title')
            detailH2.textContent = updatedObj.title
        })
})


const newIngredientForm = document.querySelector('form#ingredient-form')

newIngredientForm.addEventListener('submit', event => {
    event.preventDefault()

    const newIngredient = event.target.name.value
    const li = document.createElement('li')
    li.textContent = newIngredient

    const ingredientsUl = document.querySelector('ul.ingredients-list')
    ingredientsUl.append(li)

    event.target.reset()
})
