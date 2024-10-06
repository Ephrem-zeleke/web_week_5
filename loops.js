// let us loops
// create an array list. array list in javascript is like python list
// create an array list of birds
let birds = ['Owl', 'Robin', 'Eagles']
// now we can print this  and see the terminal window
console.log(birds)

// now let us loop each elements of an array and we use forEach function
birds.forEach( function (bird, i) {
    // repeat for each object in the array
    // this function will be called for each elements of the array as an argument
    console.log(bird)
})

// we can also write in the traditional for loop method

for (let x=0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}