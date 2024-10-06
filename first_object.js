// object is like a hashmap in python
// an object will have a name and value connected with a semicolon and separated by comma
// let us an example of an object
let user = {userName:'Ephrem', password:'kittens'}

console.log(user.userName)
console.log(user['userName'])

console.log(user.password)
console.log(user['password'])

// name is a string but the value can be anything a string, number or any other thing
// we can also change the value
user.password = 'zebra'
console.log(user)
user['password'] = 'alligator'
console.log(user)
// we can also add an element to our object
user.email = 'fjkhdfh@gamil.com'
console.log(user)
console.log(user.email)