/****** GLOBAL VARIABLES ******/
const companyName = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')




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
    collectionDiv.append(outerDiv) //SLAP IT ON THE DOM!
}


function renderAllCards() {
    articlesArray.forEach(function (articleObject) {
        renderOneCard(articleObject)
    })
}


// When a user clicks the dark mode toggle in the header, 
// change the app between light and dark mode
// 1. dark mode toggle
const darkModeToggle = document.querySelector('input#toggle-dark-mode')
// 2. click
// 3. change the app between light and dark mode
darkModeToggle.addEventListener('click', function (event) {
    // if (document.body.className === "") {
    //     document.body.className = 'dark-mode'
    // }
    // else if (document.body.className === 'dark-mode') {
    //     document.body.className = ""
    //     // document.body.classList.remove('dark-mode')
    // }
    document.body.classList.toggle('dark-mode')
})





// When a user submits the form, add a new article card 
// to the page using the data from the form
// 1. form
// 2. submit
// 3. create a new article card using the user input


// const form = document.querySelector('form#article-form')

// form.addEventListener('submit', function (event) {
//     event.preventDefault() // ALWAYS INCLUDE
//     console.dir(event.target)

//     // GET THE USER INPUT
//     // ONE WAY
//     // const titleInput = event.target[0].value
//     // const titleInput = form[0].value

//     // ANOTHER WAY
//     // const titleInputElement = document.querySelector("#article-form input[name='title']")
//     // const titleInput = titleInputElement.value

//     // THIRD WAY
//     const titleInput = event.target.title.value
//     const authorInput = event.target.author.value
//     const descriptionInput = event.target.description.value
//     const imageInput = event.target.url.value

//     const lastIndex = articlesArray.length - 1
//     const lastId = articlesArray[lastIndex].id

//     const newArticleObj = {
//         title: titleInput,
//         author: authorInput,
//         description: descriptionInput,
//         image: imageInput,
//         likes: 0,
//         id: lastId + 1
//     }

//     renderOneCard(newArticleObj) // DOM Manipulation

// })




function handleFormSubmit(event) {
    event.preventDefault() // ALWAYS INCLUDE

    const titleInput = event.target.title.value
    const authorInput = event.target.author.value
    const descriptionInput = event.target.description.value
    const imageInput = event.target.url.value

    const lastIndex = articlesArray.length - 1
    const lastId = articlesArray[lastIndex].id

    const newArticleObj = {
        title: titleInput,
        author: authorInput,
        description: descriptionInput,
        image: imageInput,
        likes: 0,
        id: lastId + 1
    }

    renderOneCard(newArticleObj) // DOM Manipulation
}


const form = document.querySelector('form#article-form')
form.addEventListener('submit', handleFormSubmit)







/****** APP INIT ******/
renderAllCards()
