// let us write a code that check the MN zip code and return a value of true or false based on the zip code
// MN zip code is between 55001 56763

function isMinnesotaZip(code){
    if(code>= 55001 && code<= 56763){
        return true
    }else{
        return false
    }
}

console.log(isMinnesotaZip(55419))
