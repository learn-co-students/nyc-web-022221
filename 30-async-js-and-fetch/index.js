function sleep(time) {
    const start = new Date()
    while (new Date() - start < time * 1000) {
        // do nothing & block the main thread 
    }
}


// document.querySelector('button').addEventListener('click', () => {
//     console.log("CLICKED !!!")
// })


// translated Ruby code from synch.rb
// console.log("Hello World!")
// console.log("brb, gonna go sleep for a sec")
// // sleep(5)

// console.log("What a nice cat nap that was!")


// console.log('BEFORE SET TIME OUT')

// setTimeout(() => {
//     console.log('INSIDE OF SET TIME OUT CALLBACK')
// }, 5000)


// console.log('AFTER SET TIME OUT')




// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json())
//     .then(data => console.log(data));


// const foo = fetch('https://randomfox.ca/floof/')
// foo.then((responseObject) => {
//     const hopefullyData = responseObject.json()
//     hopefullyData.then((foxData) => {
//         console.log(foxData)
//     })
// })

// fetch('https://randomfox.ca/floof/')
//     .then((response) => response.json())
//     .then((foxData) => {
//         console.log(foxData)
//         return foxData
//     })
//     .then(theSameFoxData => {
//         console.log(theSameFoxData)
//     })


function displayFox(foxImage) {
    const img = document.querySelector('img')
    img.src = foxImage
}

function displayLink(foxLink) {
    const anchorTag = document.createElement('a')
    anchorTag.href = foxLink
    anchorTag.textContent = 'CLICK HERE TO SEE THIS FOX\'S PROFILE'

    document.body.append(anchorTag)
}


const getFoxBtn = document.querySelector('button#get-fox-btn')

// PILLAR 2 EVENT HANDLING
getFoxBtn.addEventListener('click', event => {

    // PILLAR 3 SERVER COMMUNICATION
    fetch('https://randomfox.ca/floof/')
        .then((response) => response.json())
        .then((foxData) => {
            // PILLAR 1 DOM MANIPULATION
            displayFox(foxData.image)
            displayLink(foxData.link)
        })

})