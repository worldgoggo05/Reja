// console. log ("Jack Ma maslahatlari");
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
setTimeout(function (){
    callback(null, list [5]);
}, 5000);
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

// ------- Callback SetInterval ma'lumotlarni qayta ishga tushiradi (Asynchronus funksiyada faqat bir marta ishga tushadi)----

console. log ("Jack Ma maslahatlari");
const quote = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
if (typeof a != "number") callback("insert a number", null);
else if (a < 20) callback(null, quote [0]);
else if (a > 20 && a <= 30) callback(null, quote [1]);
else if (a > 30 && a <= 40) callback(null, quote [2]);
else if (a > 40 && a <= 50) callback(null, quote [3]);
else if (a > 50 && a <= 60) callback(null, quote [4]);
// else callback(null, list [5]);
else {
setInterval(function (){
    callback(null, quote [5]);
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