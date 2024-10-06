let user = {
    name: 'Ephrem',
    password: 'kittens',
    email: 'ephrem@gmail.com',
    roles:['programmer', 'developer'],
    contact:{
        office: 'M-1234',
        telephone: '612345678'
    }

}
// now let us add another property to our object with code

console.log(user)
user.salary = '120000'
console.log(user)
// let us add a server admin to the role element using code

user.roles.push('server admin')
console.log(user)