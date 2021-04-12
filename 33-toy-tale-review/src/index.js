let addToy = false;
const url = 'http://localhost:3000/toys'
const form = document.querySelector('form.add-toy-form')
const toyCollection = document.querySelector('div#toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


toyCollection.addEventListener('click', event => {

  if (event.target.matches('button.like-btn')) {
    console.log('clicked on like button!!! ', event.target)

    const parentDiv = event.target.closest('div.card')
    const likesPDisplay = parentDiv.querySelector('p')

    const likes = parseInt(likesPDisplay.textContent) + 1
    likesPDisplay.textContent = `${likes} Likes`

    fetch(`${url}/${parentDiv.dataset.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`Your loss, my friend. ${response.statusText}`)
      })
      .catch(error => {
        swal(error.message)
      })
  }
})


form.addEventListener('submit', event => {
  event.preventDefault()

  const name = event.target.name.value
  const image = event.target.image.value

  const newToyObj = { name, image, likes: 0 }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newToyObj)
  })
    .then(response => response.json())
    .then(renderToyObject)
})


function renderToyObject(toyObject) {
  const div = document.createElement('div')
  div.classList.add('card')
  div.dataset.id = toyObject.id

  div.innerHTML = `<h2>${toyObject.name}</h2>
  <img src=${toyObject.image} class="toy-avatar" />
  <p>${toyObject.likes} Likes </p>
  <button class="like-btn">Like <3</button>`

  toyCollection.append(div)

  // NESTED APPROACH
  // const likeBtn = div.querySelector('button.like-btn')
  // likeBtn.addEventListener('click', () => {
  //   const likesDisplay = div.querySelector('p')
  //   const likes = parseInt(likesDisplay.textContent) + 1
  //   likesDisplay.textContent = `${likes} Likes`

  //   fetch(`http://localhost:3000/monkeys/${toyObject.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ likes })
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       console.log(response.statusText)
  //       throw new Error(`Your loss, my friend. ${response.statusText}`)
  //     })
  //     .catch(error => {
  //       console.dir(error)
  //       swal(error.message)
  //     })
  //   // .then(updatedToyObj => {
  //   //   likesDisplay.textContent = `${updatedToyObj.likes} Likes`
  //   // })
  // })
}


function renderAllToys() {
  fetch(url)
    .then(response => response.json())
    .then(toyArray => {
      toyArray.forEach(toy => renderToyObject(toy))
    })
}


renderAllToys()



