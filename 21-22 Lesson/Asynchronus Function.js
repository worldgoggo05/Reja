// -------------Asynchronus Functions----------- :

console. log ("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a) {
if (typeof a != "number") return "insert a number";
else if (a < 20) return list [0];
else if (a > 20 && a <= 30) return list [1];
else if (a > 30 && a <= 40) return list [2];
else if (a > 40 && a <= 50) return list [3];
else if (a > 50 && a <= 60) return list [4];
// else{
//     return list [5];
// }
else { // Promise , we can use setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list [5]), 5000);
    });
} // Promise ended

// else {
// setTimeout(function (){
//     return list [5];
// }, 5000);
// }
}


// then & catch
console.log("Start");
maslahatBering(65).then((data) => {
console.log ("Maslahat:", data);
}).catch((err) => {
    console.log ("ERROR:", err);
});
console.log("End");


// async & await
async function run() {
    let result = await maslahatBering(65);
    console.log("Maslahat:", result);
    result = await maslahatBering(30);
    console.log("Maslahat:", result);
    result = await maslahatBering(40);
    console.log("Maslahat:", result);
}
run(); 


// ---------Async function with .then((=>{})) .catch((=>{})) ---------
// funcName(param).then((data) => {
//     console.log("Maslahat:", data);
// }).catch((err) => {
//     console.log("ERROR:", err);
// }); 
// bu funksiya Callback Functiondan farqi setTimeout qo'yilmagan bo'lsada
// synchronus functionlardan keyin amalga oshiriladi . Va single threadimizni band qilmaydi
// Lekin bu 'callback hellga' sabab bo'lishi mumkin

// ---------Async function with async & await ---------
// async function run() {
//     let result = await funcName(param);
//     console.log("Maslahat:", result);
// }
// run(); 
// bu funksiya callback hellni oldini oladi
// va kodni yanada tushunarli va boshqarishni oson qiladi

// Promise
// Promise - bu function bir javobni olmasddan turib keyingi functionga o'tmaslikni ta'minlaydi
// Ya'ni javobni kutib turadi

// ---------setInterval ni Async function bilan ishlatsak---------
async function runInterval() {
    setInterval(() => {
        console.log("Hello"); 
    }, 1000);
}
// runInterval() funksiyasi Promise qaytaradi va await bilan kutib olinishi mumkin

// Callback function bilan ishlatsak
function withCallback(callback) {
    setInterval(() => {
        callback("Hello");
    }, 1000);
}
// withCallback((message) => {
//     console.log(message);
// });
// Callback function orqali natijani olish va qayta ishlash mumkin

