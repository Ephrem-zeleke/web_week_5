// now we will see function

// let write a function for shout text. we use the word function to write a function

function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
// the function will have a name and in this case the name of the function is shout
}
console.log(shout('hello world'))

let message = shout('Hello programmers')
console.log(message)

// let is also write another function

function f_to_c(f, decimalPlaces){
    let celsius = (f-32)*5/9
    if (decimalPlaces){
        return celsius.toFixed(decimalPlaces)
    }else {
        return celsius
    }


}
// we can call the function with two arguments but if we call the function without an argument, it will crush
//
let todayTemp = 75
todayTemp_in_celsius = f_to_c(todayTemp, 2)
console.log(todayTemp_in_celsius)

