const articlesArray = [
    {
        id: 1,
        title: "Local Boy Unmutes Himself",
        author: "Tim Wit",
        description: "In a stunning turn of events, a very competent programmer remembers to press the 'unmute' button before speaking on Zoom.",
        image: "https://images.idgesg.net/images/article/2020/07/zoom-for-home-100852180-large.jpg",
        likes: 6
    },
    {
        id: 2,
        title: "Fluff Daddy",
        author: "F. Diddy",
        description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
        image: "https://i.redd.it/l0uj355oxv341.jpg",
        likes: 50
    },
    {
        id: 3,
        title: "Earth Spinning",
        author: "Bark Twain",
        description: "Recent studies have led scientists to believe that the Earth is spinning round as we speak.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
        likes: 50
    },
    {
        id: 4,
        title: "Raffy so cute",
        author: "Mr. Rafferty",
        description: "Raffy continues to be a fluffy boy.",
        image: "images/raffy.jpg",
        likes: 27
    },
    {
        id: 5,
        title: "I'm not fat, I'm Fluffy",
        author: "Gabriel Iglesias",
        description: "...and Covid makes me even fluffier",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawkwardyeti.com%2Fwp-content%2Fuploads%2F2017%2F07%2F063017_MaintenanceRequired-1024x841.png&f=1&nofb=1",
        likes: 9000
    }
]




/****** READ ******/
const companyName = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')



/****** UPDATE ******/
// 1. FIND the elemend you want to update
const firstCardImg = document.querySelector('div.img-container img')
// 2. UPDATE it!
firstCardImg.src = '/Users/michelle/Desktop/my-cohorts/nyc-web-022221/24-dom-manipulation/newsApp/images/raffy.jpg'





const schoolName = document.querySelector('p.flatiron')
schoolName.style.color = 'red'



/****** DELETE ******/

const adDiv = document.querySelector('.card.ad')
adDiv.remove()
// console.log(adDiv)








{/* <div class="card" data-id="1">
                <div class="img-container">
                    <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt="Raffy" />
                    <div class="article-title-container">
                        <h4>Raffy is cute</h4>
                    </div>
                </div>
                <div class="content">
                    <p class='author'>Author: Rafferty</p>
                    <div class="scroll">
                        <p class='description'>Raffy is a fluffy boy! Halvah donut sugar plum chocolate bar icing apple
                            pie dragée. Gingerbread dragée sugar plum. Powder pie toffee tootsie roll danish candy
                            wafer. Sesame snaps fruitcake tootsie roll jelly chupa chups macaroon gummies sweet roll.
                            Carrot cake biscuit oat cake cotton candy sweet jelly-o topping. Cupcake pie marshmallow
                            marzipan sesame snaps biscuit apple pie dragée.</p>
                </div>
                <p class="react-count">5 likes</p>
                <button class="like-button">♥️ Like</button>
                </div>
            </div> */}

// Artisinal Approach
// function renderOneCard(articleObj) {
//     const outerDiv = document.createElement('div')
//     outerDiv.classList.add('card')
//     outerDiv.dataset.id = articleObj.id

//     const imgContainerDiv = document.createElement('div')
//     imgContainerDiv.classList.add('img-container')

//     const contentDiv = document.createElement('div')
//     contentDiv.classList.add('content')

//     outerDiv.append(imgContainerDiv, contentDiv)

//     const img = document.createElement('img')
//     img.src = articleObj.image
//     img.alt = articleObj.title

//     const articleTitleDiv = document.createElement('div')
//     articleTitleDiv.classList.add('article-title-container')

//     imgContainerDiv.append(img, articleTitleDiv)


//     const h4 = document.createElement('h4')
//     h4.textContent = articleObj.title

//     articleTitleDiv.append(h4)

//     const authorPTag = document.createElement('p')
//     authorPTag.classList.add('author')
//     authorPTag.textContent = `Author: ${articleObj.author}`


//     const scrollDiv = document.createElement('div')
//     scrollDiv.classList.add('scroll')


//     const likesDisplayPTag = document.createElement('p')
//     likesDisplayPTag.classList.add('react-count')
//     likesDisplayPTag.textContent = `${articleObj.likes} Likes`

//     const likeButton = document.createElement('button')
//     likeButton.classList.add('like-button')
//     likeButton.textContent = `♥️ Like`

//     contentDiv.append(authorPTag, scrollDiv, likesDisplayPTag, likeButton)


//     const articlePTag = document.createElement('p')
//     articlePTag.classList.add('description')
//     articlePTag.textContent = articleObj.description

//     scrollDiv.append(articlePTag)

//     // slap it on the DOM!
//     const collectionDiv = document.querySelector('div#collection')
//     collectionDiv.append(outerDiv)
// }





// innerHTML + Artisinal (Combo) Approach

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


renderAllCards()
