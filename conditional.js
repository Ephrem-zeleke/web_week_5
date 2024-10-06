// we will see conditional statements
// let us write a conditional program that check whether I am able to take android class or not
// to take an android class, you must either take Csharp or Java

// let us assign a boolean variable here
let Csharp = true
let Java = false
// now, we can write the conditional code

if(Csharp || Java){
    console.log('You are qualified to take android ')
}else{
    console.log('You must take Csharp or Java')
}

// let us write another program that check if they are able to participate in the state representative election
// to be a senator, this three conditions must be meet
//1. age must be above 30
//2. you have to have a us citizen more than 9 years
//3. must live in the state that you want to represent

// now let assign a variable for someone condition

let age = 40
let usCitizenTime = 35
let stateOfResidence = 'minnesota'
let stateWantToRepresent ='minnesota'

// now write the conditional code here
if(age>=30 && usCitizenTime>= 9 && stateOfResidence == stateWantToRepresent){
    console.log('you are qualified to participate in the senator election ')
}else{
    console.log('you are not qualified to represent your state')
}