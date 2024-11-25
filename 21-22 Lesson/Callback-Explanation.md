Callback Functionlar Nima?
Callback function - bu boshqa bir funksiyaga argument sifatida uzatiladigan funksiya. 
U asosiy funksiya bajarilgandan so'ng chaqiriladi.

Qulayliklari:
- Asynchron operatsiyalarni boshqarish imkonini beradi
- Kodning modulliligini oshiradi
- Funksiyalar ketma-ketligini ta'minlaydi

Kamchiliklari:
- Callback hell muammosi (ichma-ich callback funksiyalar)
- Xatolarni boshqarish murakkabligi
- Kodning o'qilishi qiyinlashishi mumkin

Misol:

function maslahatBering(yosh, callback) {
    if (typeof yosh !== "number") {
        callback("Yoshni raqam ko'rinishida kiriting", null);
    } else {
        setTimeout(() => {
            if (yosh < 20) {
                callback(null, "Yaxshi o'qing");
            } else if (yosh < 30) {
                callback(null, "Ishlashni boshlang");
            } else {
                callback(null, "Investitsiya qiling");
            }
        }, 1000);
    }
}

// Callback funksiyani ishlatish
console.log("Boshlandi");
maslahatBering(25, (xato, maslahat) => {
    if (xato) {
        console.log("Xato:", xato);
    } else {
        console.log("Maslahat:", maslahat);
    }
});
console.log("Tugadi");

Bu misolda maslahatBering() funksiyasi callback funksiyani parametr sifatida qabul qiladi 
va ma'lum vaqtdan so'ng natijani qaytaradi. Bu async operatsiyaga misol bo'ladi.

Shunday qilib, callback funksiyalar JavaScriptda asynchron operatsiyalarni boshqarish, 
kodning modulliligini oshirish va funksiyalar ketma-ketligini ta'minlash uchun muhim vositalardir. 
Lekin ularning ichma-ich ishlatilishi va xatolarni boshqarishda qiyinchiliklar bo'lishi mumkin.

Kodning modulliligi - bu kodning tayyorlash jarayoni va uni boshqarish jarayoni. 
