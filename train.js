//F-Task

function dbChars(str) {
    // str.length-1 ensures we don't go out of bounds when checking next character
    for (let i = 0; i < str.length - 1; i++) {
        // str[i]     - current character
        // str[i+1]   - next character
        // Check if current and next characters are identical
        if (str[i] == str[i + 1]) {
            return true   
        }
    }
    return false    
}
console.log(dbChars('hello')) //true 