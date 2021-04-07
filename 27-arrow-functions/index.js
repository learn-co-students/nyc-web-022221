// when there's one argument, no need for parenthesis
const doubleIt = num => num * 2


// createPet() // cannot call arrow function before defining it
foo() // OK


// need parenthesis for multiple arguments. if implicitly returning an object, wrap it in parenthesis
const createPet = (nameStr, ageNum) => ({ name: nameStr, age: ageNum })


function foo() {
    console.log('hi!!!')
}






/********************** MAP **********************/
// Transforms an array
// Returns a new array containing the transformed values
// (Does not mutate the original array)
// Callback should return the transformation


const transformedArr = nums.map(num => num * 3)



/********************** FILTER **********************/
// Returns a subarray satisfying a condition
// Does not mutate the original array
// Callback should return a boolean

const filteredArr = bookTitles.filter(bookTitle => bookTitle.length > 5)



/********************** SORT **********************/
// mutates the original array
// callback should return a number


// nums.sort((numA, numB) => numA - numB)

// nums.sort(function (numA, numB) {
//     return numB - numA
// })

// nums.sort((numA, numB) => numB - numA)




// bookTitles.sort((bookTitleA, bookTitleB) => bookTitleA.localeCompare(bookTitleB))
// bookTitles.sort((bookTitleA, bookTitleB) => bookTitleB.localeCompare(bookTitleA))


// books.sort((bookA, bookB) => {
//     return bookA.author.localeCompare(bookB.author)
// })
// books.sort((bookA, bookB) => bookB.author.localeCompare(bookA.author))