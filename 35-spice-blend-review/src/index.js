// write your code here


fetch('http://localhost:3000/spiceblends/1')
    .then(response => response.json())
    .then(spiceBlendObj => {
        console.log(spiceBlendObj)
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




