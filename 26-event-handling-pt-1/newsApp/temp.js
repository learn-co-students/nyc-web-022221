
// let & const => block scoped, will exist inside of {} it's defined inside of
// var => function, inside the function it's defined inside of
function foo() {

    if (true) {
        let hamster = 'fluffy'
        console.log(hamster)
    }
    console.log(hamster)
}

foo()
// console.log(hamster)

