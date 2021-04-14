// write your code here
const updateTitleForm = document.querySelector('form#update-form')
const newIngredientForm = document.querySelector('form#ingredient-form')
const spiceImagesMenu = document.querySelector('div#spice-images')


/*************** HELPER FUNCTIONS ***************/
function addIngredientToList(name) {
    const li = document.createElement('li')
    li.textContent = name

    const ingredientsUl = document.querySelector('ul.ingredients-list')
    ingredientsUl.append(li)
}

function getOneSpiceBlend(id) {
    return fetch(`http://localhost:3000/spiceblends/${id}`)
        .then(response => response.json())
}

function getFirstSpiceBlend(id) {
    getOneSpiceBlend(id)
        .then(spiceBlendObj => {
            renderDetailedSpiceBlend(spiceBlendObj)
        })
}


function renderDetailedSpiceBlend(spiceBlendObj) {
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = spiceBlendObj.image

    const detailH2 = document.querySelector('h2.title')
    detailH2.textContent = spiceBlendObj.title

    const ingredientsUl = document.querySelector('ul.ingredients-list')
    ingredientsUl.innerHTML = ''

    spiceBlendObj.ingredients.forEach(ingredientObj => {
        addIngredientToList(ingredientObj.name)
    })
}

function addMenuImage(spiceBlendObj) {
    const img = document.createElement('img')
    img.src = spiceBlendObj.image
    img.dataset.id = spiceBlendObj.id
    spiceImagesMenu.append(img)
}


function renderInitialPageView() {
    fetch('http://localhost:3000/spiceblends')
        .then(response => response.json())
        .then(spiceBlendArr => {

            getFirstSpiceBlend(spiceBlendArr[0].id)

            spiceBlendArr.forEach(spiceBlendObj => {
                addMenuImage(spiceBlendObj)
            })
        })
}


/*************** EVENT LISTENERS ***************/
updateTitleForm.addEventListener('submit', event => {
    event.preventDefault()

    const title = event.target.title.value

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



newIngredientForm.addEventListener('submit', event => {
    event.preventDefault()

    const name = event.target.name.value
    addIngredientToList(name)

    fetch('http://localhost:3000/ingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, spiceblendId: 1 })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Uh oh! Did not work!')
        })
        .catch(error => {
            alert(error.message)
        })

    event.target.reset()
})


spiceImagesMenu.addEventListener('click', event => {

    if (event.target.matches('img')) {

        getOneSpiceBlend(event.target.dataset.id)
            .then(spiceBlendObj => {
                renderDetailedSpiceBlend(spiceBlendObj)
            })

    }
})


/*************** APP INIT ***************/
renderInitialPageView()