// we can use [] to define an array in javascript
// length is not fixed and we can add and delete elements

// we can read all the elements or a single elements using an index
let animals = ['Cat', 'Dog', 'lion', 'birds']

// we can print all the elements of an array
console.log(animals)
// we can also print a single elements of an array using an index
console.log(animals[0])
console.log(animals[1])

// we can replace elements using index too
animals[3]= 'giraffe'

console.log(animals)
//we can use .push to add an elements at the end of the elements

animals.push('elephant')
console.log(animals)
// .unshift will add an elements at the beginning of the array

animals.unshift('tiger')
console.log(animals)

// we can also remove an elements from the beginning and the end of an array
// to remove from the beginning, we can use .shift

let removeFirstAnimal = animals.shift()
console.log(removeFirstAnimal)
console.log(animals)
// .pop will remove the last elements from the array
animals.pop()
console.log(animals)
// the function reverse() will reverse the order of the array
animals.reverse()
console.log(animals)
animals.sort() // this will sort the elements in alphabetical order
console.log(animals)
console.log(animals.join())
console.log(animals.join(' * '))// this will join the elements with a comma with no space


animals.forEach(function(animal){
    console.log(animal.toUpperCase())
})

//
animals.forEach(function(animal){
    console.log(animal.length)
})
let animalNameLength = []

animals.forEach(function(animal){
    let length = animal.length;
    animalNameLength.push(length)
})
console.log(animalNameLength)
