/****** GLOBAL VARIABLES ******/
const companyName = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const form = document.querySelector('form#article-form')
const darkModeToggle = document.querySelector('input#toggle-dark-mode')



/****** HELPER FUNCTIONS ******/
function updateFirstCard() {
    const firstCardImg = document.querySelector('div.img-container img')
    firstCardImg.src = '/Users/michelle/Desktop/my-cohorts/nyc-web-022221/24-dom-manipulation/newsApp/images/raffy.jpg'
}


function updateSchoolColor() {
    const schoolName = document.querySelector('p.flatiron')
    schoolName.style.color = 'red'
}


function deleteAdvertisment() {
    const adDiv = document.querySelector('.card.ad')
    adDiv.remove()
}


function renderOneCard(articleObj) {
    // 1. CREATE THE OUTER MOST DIV OF THE HTML YOU'RE CREATING
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('card')
    outerDiv.dataset.id = articleObj.id

    // ADD THE INNER CONTENTS
    outerDiv.innerHTML = `<div class="img-container">
        <img src="${articleObj.image}"
            alt="${articleObj.title}" />
        <div class="article-title-container">
            <h4>${articleObj.title}</h4>
        </div>
    </div>
    <div class="content">
        <p class='author'>Author: ${articleObj.author}</p>
        <div class="scroll">
            <p class='description'>${articleObj.description}</p>
        </div>
        <p class="react-count">${articleObj.likes} likes</p>
        <button class="like-button">♥️ Like</button>
        <button class='delete-button'>X</button>
    </div>`

    // FIND WHERE YOU WANT TO ADD THIS ON THE PAGE & SLAP IT ON THE DOM
    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(outerDiv)
}


function renderAllCards() {
    articlesArray.forEach(function (articleObject) {
        renderOneCard(articleObject)
    })
}



/****** EVENT LISTENERS ******/
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', function (event) {
    event.preventDefault() // ALWAYS INCLUDE

    const lastIndex = articlesArray.length - 1
    const lastId = articlesArray[lastIndex].id

    const newArticleObj = {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        image: event.target.url.value,
        likes: 0,
        id: lastId + 1
    }

    articlesArray.push(newArticleObj)
    renderOneCard(newArticleObj) // DOM Manipulation
    form.reset()
})





// EVENT DELEGATION
// Find the first common parent of all of the elements you care abouts
const collectionUl = document.querySelector('div#collection')
collectionUl.addEventListener('click', event => {

    // determine when I'm clicking on the element/s that I care about
    if (event.target.className === 'delete-button') {
        const cardDiv = event.target.closest('div.card')
        cardDiv.remove()
    }
    else if (event.target.matches('.like-button')) {
        // const likesPTag = event.target.previousElementSibling
        // const currLikes = parseInt(likesPTag.textContent)
        // likesPTag.textContent = `${currLikes + 1} Likes`
        console.dir(event.target)
        const cardDiv = event.target.closest('div.card')
        const likesPTag = cardDiv.querySelector('p.react-count')
        const currLikes = parseInt(likesPTag.textContent)
        likesPTag.textContent = `${currLikes + 1} Likes`
    }
})













/****** APP INIT ******/
renderAllCards()
deleteAdvertisment()



// document.querySelector('.delete-button').addEventListener('click', event => {
//     console.log('DELETE CLICKED ', event.target)
// })

// document.querySelector('.card').addEventListener('click', event => {
//     console.log('CARD CLICKED ', event.target)
// })


// document.body.addEventListener('click', event => {
//     console.log('BODY CLICKED ', event.target)
// })