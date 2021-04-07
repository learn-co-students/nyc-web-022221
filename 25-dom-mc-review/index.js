/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = '#652980'


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

const profileDiv = document.querySelector('#profile')
// profileDiv.innerHTML = `<img src="${traveler.photo}"
// alt="${traveler.name}">
// <h2>${traveler.name}</h2>
// <em>${traveler.nickname}</em>`

const profileImg = profileDiv.querySelector('img')
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = profileDiv.querySelector('h2')
profileH2.textContent = traveler.name

const profileEm = profileDiv.querySelector('em')
profileEm.textContent = traveler.nickname


/***** Deliverable 4 *****/
function renderOneAnimalSighting(animalSightingObj) {
    const li = document.createElement('li')
    li.dataset.id = animalSightingObj.id

    // li.dataset.something = someValue
    // <li data-something></li>

    li.innerHTML = `
    <p>${animalSightingObj.description}</p>
    <img src="${animalSightingObj.photo}" alt="${animalSightingObj.species}"/>
    <a href="${animalSightingObj.link}" target="_blank">Here's a video about the ${animalSightingObj.species}species!</a>`

    const animalCollectionUl = document.querySelector('ul')
    animalCollectionUl.append(li)
}


function renderAllAnimalSightings() {
    traveler.animalSightings.forEach(renderOneAnimalSighting)
}


renderAllAnimalSightings()





/***** Deliverable 5 *****/
const sightingToRemove = document.querySelector("[data-id='3']")
console.log(sightingToRemove)
sightingToRemove.remove()

