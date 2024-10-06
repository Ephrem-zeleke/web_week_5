let text = 'The classes are itec 1150, itec 1250 and itec2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced) // this thing will replace only the first itec, not all itec
// if we want to replace all, we have to use the global argument

// let is assign a variable for replace all
let replacedAll = text.replace(/itec/g, 'ITEC') // this one will replace all the itec with upper case

// now let us call the replacedAll
console.log(replacedAll)

