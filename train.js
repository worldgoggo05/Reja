//--------D-Task---------
const date = require('date-fns');
const time = date.format(new Date(), 'HH:mm');
class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non,
            lagmon: lagmon, 
            cola: cola
        };
    }

    qoldiq() {
        return `hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
    }

    sotish(product, amount) {
        if (this.products[product] >= amount) {
            this.products[product] -= amount;
            return `hozir ${time}da ${amount}ta ${product} sotildi`;
        }
        return `Kechirasiz, ${product} yetarli emas`;
    }

    qabul(product, amount) {
        this.products[product] += amount;
        return `hozir ${time}da ${amount}ta ${product} qabul qilindi`;
    }
}

// Tekshirib Ko'rish 
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 2ta cola
console.log(shop.sotish('non', 3)); // hozir 12:00da 3ta non sotildi
console.log(shop.qabul('cola', 4)); // hozir 12:00da 4ta cola qabul qilindi
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 6ta cola


//---------- C-TASK -----------------
// const letterExist2 = (str,str2) => {
//     return str.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(letterExist2("mitgroup", "gmtiprou")) // true

//------------ B-TASK: --------------
// const countDigits = (str) => {
//     return str.split('').map(Number).filter(char => !isNaN(char)).length
// }

// console.log(countDigits(("ad2a54y79wet0sfgb9"))); //7

//------------ A-TASK: --------------
// const countLetters = (letter,str) => {
//     return str.split('').filter(char => char === letter).length
// }

// console.log(countLetters("e", "engineer"));


