 

function palindrome(str) {
    for( let i = 0; i < Math.ceil(str.length / 2);  i++ ) {
        if(str[i] !== str[str.length - i - 1]) {
            console.log(false)
            return false
        }
    } 
    console.log(true)
    return true
}

palindrome("ada")
palindrome("dada")
palindrome("madam")
