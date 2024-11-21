//------------ B-TASK: --------------
const countDigits = (str) => {
    return str.split('').map(Number).filter(char => !isNaN(char)).length
}

console.log(countDigits(("ad2a54y79wet0sfgb9"))); //7


//------------ A-TASK: --------------
// const countLetters = (letter,str) => {
//     return str.split('').filter(char => char === letter).length
// }

// console.log(countLetters("e", "engineer"));


