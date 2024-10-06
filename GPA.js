function validGpa(Gpa){
    if (Gpa >=0 && Gpa <=4){
        return true;
    }
    else {
        return false;
    }
}
console.log(validGpa(3.5));
console.log(validGpa(0));
console.log(validGpa(1));
console.log(validGpa(4));
console.log(validGpa(5));

// write a function that joins the city and state together and the state abbreviation  should be in upper case

// let is create the function first and give a name to your function
function cityStateAddresses(city, state){
    let addresses = city +', '+state.toUpperCase()
    return addresses
}
// now we can call our function with the city and state parameters

console.log(cityStateAddresses('minneapolis', 'mn'))

let adress = cityStateAddresses('Seattle', 'wa')
console.log(adress)
