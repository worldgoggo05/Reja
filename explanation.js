// EXPRESS.JS VA EJS ASOSLARI

// 1. EXPRESS METHODS:

// app.get(path, callback) - GET so'rovlarini qabul qilish uchun
// - Misol: app.get("/hello", function(req, res) { ... })
// - Brauzerda URL orqali kirilganda ishlaydi

// app.post(path, callback) - POST so'rovlarini qabul qilish uchun
// - Misol: app.post("/create-item", function(req, res) { ... })
// - Formadan ma'lumot yuborilganda ishlaydi

// app.use() - Middleware (oraliq dastur)larni ulash uchun
// - Misol: app.use(express.json()) - JSON formatdagi ma'lumotlarni qabul qilish uchun
// - Misol: app.use(express.static("public")) - Statik fayllarni (rasm, css) serve qilish uchun

// 2. REQUEST (req) VA RESPONSE (res):

// req - Foydalanuvchidan kelgan so'rov
// - req.body - POST so'rovida kelgan ma'lumotlar
// - req.params - URL parametrlari (/users/:id)
// - req.query - URL query parametrlari (?name=John)

// res - Serverdan javob
// - res.send() - Oddiy text yuborish
// - res.json() - JSON formatda javob yuborish
// - res.render() - EJS faylni render qilish
// - res.end() - Javobni tugatish 

// 3. EJS (EMBEDDED JAVASCRIPT):

// EJS - HTML ichida JavaScript kodlarini yozish imkonini beruvchi template tili
// - <% %> - JavaScript kod yozish uchun
// - <%= %> - O'zgaruvchi qiymatini chiqarish uchun
// - <%- %> - HTML kodlarni render qilish uchun

// Misol:
// <% if (user) { %>
//     <h1>Salom, <%= user.name %></h1>
// <% } %>

// 4. EXPRESS SETUP:

// app.set("view engine", "ejs") - EJS ni asosiy ko'rinish tili sifatida o'rnatish
// app.set("views", "views") - EJS fayllar joylashgan papkani ko'rsatish

// 5. ROUTING MISOLLAR:

// app.get("/", (req, res) => {
//     res.render("home", { 
//         title: "Bosh sahifa",
//         users: ["Ali", "Vali"]
//     });
// });

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;
//     // Ma'lumotlar bazasi bilan ishlash
//     res.json({ success: true });
// });

// 6. MIDDLEWARE:

// Middleware - so'rov va javob orasida ishlaydigan funksiyalar
// - Autentifikatsiya
// - Ma'lumotlarni tekshirish
// - Xatolarni ushlash

// Misol:
// app.use((req, res, next) => {
//     console.log("Yangi so'rov keldi");
//     next();
// });

// 7. EXPRESS.URLENCODED:
//app.use(express.urlencoded({ extended: true }))
// HTML formalardan POST metodi orqali yuborilgan ma'lumotlarni parse qiladi
// Bu ma'lumotlarni JavaScript obyektiga aylantirib beradi
// So'ngra siz bu ma'lumotlarni req.body orqali olishingiz mumkin
// extended: true parametri haqida:
// true bo'lsa - murakkab obyektlar va massivlarni ham qabul qila oladi
// false bo'lsa - faqat oddiy ma'lumotlarni qabul qiladi
// Qisqa qilib aytganda, bu middleware HTML formalardan kelgan 
// ma'lumotlarni serverda qulay ishlatish uchun xizmat qiladi.

// 8. CALLBACK VA ASYNCHRONOUS FUNCTIONS:

// Callback - boshqa funksiya ichida argument sifatida beriladigan funksiya
// Asynchronous - kodning ketma-ketlikda emas, parallel ravishda ishlashi

// CALLBACK MISOL:
function getData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 25 };
        callback(data);
    }, 2000);
}

getData((result) => {
    console.log(result); // 2 sekunddan keyin: { name: "John", age: 25 }
});

// ASYNC/AWAIT MISOL:
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/user');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Xatolik:', error);
    }
}

// PROMISE MISOL:
const getDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: "John", age: 25 };
        if (data) {
            resolve(data);
        } else {
            reject("Ma'lumot topilmadi");
        }
    }, 2000);
});

// ASOSIY KALIT SO'ZLAR:
// - async/await - asinxron funksiyalarni sinxron ko'rinishda yozish
// - Promise - asinxron operatsiyalar uchun konteyner
// - .then() - muvaffaqiyatli natija bilan ishlash
// - .catch() - xatolarni ushlash
// - try/catch - xatolarni boshqarish
// - setTimeout/setInterval - vaqt bilan ishlash

// REAL HAYOTIY MISOL:
async function registerUser(userData) {
    try {
        // Foydalanuvchi ma'lumotlarini tekshirish
        await validateUserData(userData);
        
        // Ma'lumotlar bazasiga saqlash
        const newUser = await saveToDatabase(userData);
        
        // Email yuborish
        await sendWelcomeEmail(newUser.email);
        
        return { success: true, user: newUser };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Event Loop va CallStack:
// 1. CallStack - sinxron kodlar ketma-ketligi
// 2. Event Loop - asinxron kodlarni boshqarish mexanizmi
// 3. Callback Queue - callback funksiyalar navbati
// 4. Microtask Queue - Promise va async/await natijalar navbati

