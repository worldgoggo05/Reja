/* YANGI REJA YARATISH 6-BOSQICHI */
// 1-Bosqich: Frontend ma'lumotni Backendga yuboradi (browser.js -> app.js)
// 2-Bosqich: Backend Frontenddan ma'lumotni qabul qiladi (app.js so'rovni qabul qiladi)
// 3-Bosqich: Backend ma'lumotni Databasega yuboradi (app.js -> MongoDB)
// 4-Bosqich: Database qayta ishlab Backendga qaytaradi (MongoDB -> app.js)
// 5-Bosqich: Backend qayta ishlab Frontendga yuboradi (app.js -> browser.js)
// 6-Bosqich: Frontend qabul qilib UI ni yangilaydi (browser.js DOM ni yangilaydi)

//-------------------------------
// delete-item
// 1-Bosqich: Frontend -> Backend
//   - Foydalanuvchi o'chirish tugmasini bosadi
//   - browser.js da axios.post("/delete-item", {id: itemId}) yuboriladi

// 2-Bosqich: Backend o'chirish so'rovini qabul qiladi
//   - app.js /delete-item ga POST so'rovni qabul qiladi
//   - so'rov tanasidan element ID sini ajratib oladi

// 3-Bosqich: Backend -> Database
//   - app.js ID ni MongoDB ObjectId ga o'zgartiradi
//   - MongoDB ga deleteOne() buyrug'ini yuboradi

// 4-Bosqich: Database -> Backend
//   - MongoDB o'chirishni amalga oshiradi
//   - app.js ga o'chirish natijasini qaytaradi

// 5-Bosqich: Backend -> Frontend
//   - app.js o'chirish muvaffaqiyatli bo'lganini tekshiradi
//   - browser.js ga muvaffaqiyat/xato javobini yuboradi

// 6-Bosqich: Frontend UI ni yangilaydi
//   - browser.js javobni qabul qiladi
//   - muvaffaqiyatli bo'lsa, elementni DOM dan o'chiradi


//-------------------------------
// edit-item
// 1-Bosqich: Frontend -> Backend
//   - Foydalanuvchi tahrirlash tugmasini bosib yangi matnni kiritadi
//   - browser.js da axios.post("/edit-item", {id: itemId, new_reja: newText}) yuboriladi

// 2-Bosqich: Backend tahrirlash so'rovini qabul qiladi
//   - app.js /edit-item ga POST so'rovni qabul qiladi
//   - so'rov tanasidan element ID va yangi matnni ajratib oladi

// 3-Bosqich: Backend -> Database
//   - app.js ID ni MongoDB ObjectId ga o'zgartiradi
//   - MongoDB ga findOneAndUpdate() buyrug'ini yuboradi

// 4-Bosqich: Database -> Backend
//   - MongoDB yangilanishni amalga oshiradi
//   - app.js ga yangilangan hujjatni qaytaradi

// 5-Bosqich: Backend -> Frontend
//   - app.js yangilash muvaffaqiyatli bo'lganini tekshiradi
//   - browser.js ga muvaffaqiyat/xato javobini yuboradi

// 6-Bosqich: Frontend UI ni yangilaydi
//   - browser.js javobni qabul qiladi
//   - muvaffaqiyatli bo'lsa, element matnini DOM da yangilaydi
