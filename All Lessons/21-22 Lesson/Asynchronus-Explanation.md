Asynchron (Async) Funksiyalar Nima?
Async funksiya - bu Promise qaytaradigan va await operatorini ishlatish imkonini beradigan maxsus funksiya turi.
Bu funksiyalar asynchron operatsiyalarni yanada sodda va tushunarli tarzda yozish imkonini beradi.

Qulayliklari:
- Callback hell muammosini hal qiladi
- Kodning o'qilishi va tushunilishi osonlashadi 
- Promise'larni yanada qulay boshqarish imkonini beradi
- Xatolarni try-catch orqali boshqarish mumkin
- Ketma-ket operatsiyalarni yozish osonlashadi

Kamchiliklari:
- Eski brauzerlarda qo'llab-quvvatlanmasligi mumkin
- Noto'g'ri ishlatilganda performance muammolari
- Promise'larni tushunish talab etiladi
- await faqat async funksiya ichida ishlaydi

Misol:

async function maslahatBering(yosh) {
    if (typeof yosh !== "number") {
        throw new Error("Yoshni raqam ko'rinishida kiriting");
    }
    
    // Promise qaytaradigan async operatsiya
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (yosh < 20) {
                resolve("Yaxshi o'qing");
            } else if (yosh < 30) {
                resolve("Ishlashni boshlang");
            } else {
                resolve("Investitsiya qiling");
            }
        }, 1000);
    });
}

// async/await yordamida ishlatish
async function run() {
    try {
        console.log("Boshlandi");
        const maslahat = await maslahatBering(25);
        console.log("Maslahat:", maslahat);
        console.log("Tugadi");
    } catch (error) {
        console.log("Xato:", error.message);
    }
}

run();

Bu misolda maslahatBering() async funksiya Promise qaytaradi va await orqali natija kutib olinadi.
try-catch bloki xatolarni boshqarish uchun ishlatiladi.
Async/await yordamida kod yanada tushunarli va boshqarish oson bo'ladi.
