// write your code here
const ramenMenu = document.querySelector('div#ramen-menu')
const detailedRamenUpdateForm = document.querySelector('form#ramen-rating')
let currentRamenId;


function renderRamenMenu() {
    // fetch('http://localhost:3000/ramens')
    //     .then(response => response.json())
    fetchUniversalRamen('GET', {}, '')
        .then(ramenArr => {
            detailOneRamen(ramenArr[0])
            ramenArr.forEach(renderOneMenuImage)
        })
}


function renderOneMenuImage(ramenObject) {
    const img = document.createElement('img')
    img.src = ramenObject.image
    img.dataset.id = ramenObject.id
    ramenMenu.append(img)
}


function detailOneRamen(ramenObj) {
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = ramenObj.image
    detailImg.alt = ramenObj.name

    const detailH2 = document.querySelector('h2.name')
    detailH2.textContent = ramenObj.name

    const detailH3 = document.querySelector('h3.restaurant')
    detailH3.textContent = ramenObj.restaurant

    const ratingInput = document.querySelector('input#rating')
    ratingInput.value = ramenObj.rating

    const commentInput = document.querySelector('textarea#comment')
    commentInput.value = ramenObj.comment

    detailedRamenUpdateForm.dataset.id = ramenObj.id
    currentRamenId = ramenObj.id

}


function getOneRamen(id) {
    return fetch(`http://localhost:3000/ramens/${id}`)
        .then(response => response.json())
}


function fetchUniversalRamen(httpVerb, updatedRamenObj, id) {
    switch (httpVerb) {
        case 'GET':
            // will only work with GET /ramens; NOT GET /ramens/:id
            return fetch(`http://localhost:3000/ramens`)
                .then(response => response.json())
        case 'PATCH':
        case 'POST':
        case 'DELETE':
            return fetch(`http://localhost:3000/ramens/${id}`, {
                method: httpVerb,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(updatedRamenObj)
            })
                .then(response => response.json())
    }
}


ramenMenu.addEventListener('click', event => {

    if (event.target.matches('img')) {
        getOneRamen(event.target.dataset.id)
            .then(detailOneRamen)
    }
})


detailedRamenUpdateForm.addEventListener('submit', event => {
    event.preventDefault()

    const rating = event.target.rating.value
    const comment = event.target.comment.value

    fetchUniversalRamen('PATCH', { rating, comment }, event.target.dataset.id)
        .then(data => console.log(data))
})


renderRamenMenu()
