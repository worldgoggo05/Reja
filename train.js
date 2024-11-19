//-------------Event Loop va Callback Functionlar----------- :

// console. log ("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
// if (typeof a != "number") callback("insert a number", null);
// else if (a < 20) callback(null, list [0]);
// else if (a > 20 && a <= 30) callback(null, list [1]);
// else if (a > 30 && a <= 40) callback(null, list [2]);
// else if (a > 40 && a <= 50) callback(null, list [3]);
// else if (a > 50 && a <= 60) callback(null, list [4]);
// // else callback(null, list [5]);
// else {
// setTimeout(function (){
//     callback(null, list [5]);
// }, 5000);
// }
// }

// console.log("Start");
// maslahatBering(65, (err, data) => {
// if (err) console.log ("ERROR:", err);
// else {
//     console.log ("Maslahat:", data);
// }
// });
// console.log("End");

//-------------Asynchronus Functions----------- :

// console. log ("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// async function maslahatBering(a) {
// if (typeof a != "number") return "insert a number";
// else if (a < 20) return list [0];
// else if (a > 20 && a <= 30) return list [1];
// else if (a > 30 && a <= 40) return list [2];
// else if (a > 40 && a <= 50) return list [3];
// else if (a > 50 && a <= 60) return list [4];
// else{
//     return list [5];
// }
// else { // Promise , we can use setTimeout
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(list [5]), 5000);
//     });
// } // Promise ended

// else {
// setTimeout(function (){
//     return list [5];
// }, 5000);
// }
// }


// then & catch
// console.log("Start");
// maslahatBering(65).then((data) => {
// console.log ("Maslahat:", data);
// }).catch((err) => {
//     console.log ("ERROR:", err);
// });
// console.log("End");


// async & await
// async function run() {
//     let result = await maslahatBering(65);
//     console.log("Maslahat:", result);
//     result = await maslahatBering(30);
//     console.log("Maslahat:", result);
//     result = await maslahatBering(40);
//     console.log("Maslahat:", result);
// }
// run(); 


// ------- Callback SetInterval ma'lumotlarni qayta ishga tushiradi (Asynchronus funksiyada faqat bir marta ishga tushadi)----

console. log ("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
if (typeof a != "number") callback("insert a number", null);
else if (a < 20) callback(null, list [0]);
else if (a > 20 && a <= 30) callback(null, list [1]);
else if (a > 30 && a <= 40) callback(null, list [2]);
else if (a > 40 && a <= 50) callback(null, list [3]);
else if (a > 50 && a <= 60) callback(null, list [4]);
// else callback(null, list [5]);
else {
setInterval(function (){
    callback(null, list [5]);
}, 1000);
}
}

console.log("Start");
maslahatBering(65, (err, data) => {
if (err) console.log ("ERROR:", err);
else {
    console.log ("Maslahat:", data);
}
});
console.log("End");

