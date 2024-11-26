# MongoDB Connection va CRUD Operatsiyalari Loyihamizda

## Ma'lumotlar bazasi Connection (server.js)
MongoDB ulanish - bu ma'lumotlar bazasi bilan bog'lanish jarayoni

### Asosiy Tushunchalar:
- **MongoDB** - Bu NoSQL ma'lumotlar bazasi
- **Connection** - Ma'lumotlar bazasiga ulanish
- **CRUD** - Create (Yaratish), Read (O'qish), Update (Yangilash), Delete (O'chirish) operatsiyalari

Loyihamizda MongoDB ulanishi quyidagicha amalga oshiriladi:

## CRUD Operatsiyalari (app.js)

### Create (Yaratish) Operatsiyasi
Yangi reja qo'shish uchun POST so'rov:

```javascript
// Yangi reja qo'shish uchun API endpoint
app.post("/create-item", (req, res) => {
    console.log("Foydalanuvchi /create-item ga kirdi");
    const new_reja = req.body.item;  // Yangi rejani so'rovdan olish
    
    // Ma'lumotlar bazasiga yangi rejani qo'shish
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("Xatolik yuz berdi!");
        } else {
            res.end("Muvaffaqiyatli qo'shildi");
        }
    });
});
```

### Read (O'qish) Operatsiyasi
Barcha rejalarni olish uchun GET so'rov:

```javascript
// Barcha rejalarni ko'rsatish uchun asosiy sahifa
app.get("/", function (req, res) {
    console.log("Foydalanuvchi bosh sahifaga kirdi");
    
    // Barcha rejalarni bazadan olish
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Xatolik yuz berdi!");
            } else {
                console.log(data);
                // Ma'lumotlarni sahifaga uzatish
                res.render("reja", { items: data });
            }
        });
});
```

### Delete (O'chirish) Operatsiyasi
Barcha rejalarni o'chirish uchun POST so'rov:

```javascript
// Barcha rejalarni o'chirish uchun API endpoint
app.post("/delete-all", (req, res) => {
    db.collection("plans").deleteMany({}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({ error: "Xatolik yuz berdi!" });
        } else {
            res.json({ success: true });
        }
    });
});
```

## Frontend Qismi (reja.ejs)

Frontend qismida ma'lumotlarni ko'rsatish va foydalanuvchi harakatlarini boshqarish:

1. **Ma'lumotlarni Ko'rsatish**: 
```html
<!-- Rejalar ro'yxatini ko'rsatish -->
<ul id="item-list" class="list-group pb-3">
    <% items.map(function(item) { %>
        <li class="list-group-item">
            <span class="item-text"><%= item.reja %></span>
            <div class="button-group">
                <button data-id="<%= item._id %>" class="btn btn-sm btn-edit">
                    O'zgartirish
                </button>
                <button data-id="<%= item._id %>" class="btn btn-sm btn-delete">
                    O'chirish
                </button>
            </div>
        </li>
    <% }) %>
</ul>
```

2. **O'chirish Funksiyasi**:
```javascript
// Barcha rejalarni o'chirish tugmasi bosilganda
document.querySelector(".delete-all").addEventListener("click", function() {
    if(confirm("Hamma rejalarni o'chirishni xohlaysizmi?")) {
        // Serverga so'rov yuborish
        fetch("/delete-all", { method: "POST" })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    location.reload();  // Sahifani yangilash
                }
            });
    }
});
```

## Loyiha Tuzilishi

1. **Server Qatlami (server.js)**:
   - MongoDB bilan ulanishni o'rnatadi
   - Ma'lumotlar bazasi mijozini eksport qiladi
   - HTTP serverni ishga tushiradi

2. **Dastur Qatlami (app.js)**:
   - So'rovlarni boshqaradi
   - CRUD operatsiyalarini amalga oshiradi
   - Ma'lumotlar oqimini boshqaradi

3. **Ko'rinish Qatlami (reja.ejs)**:
   - Ma'lumotlarni ko'rsatadi
   - Foydalanuvchi harakatlarini qabul qiladi
   - Serverga so'rovlar yuboradi

## Xavfsizlik Maslahatlar

1. Muhim ma'lumotlarni environment variables da saqlash
2. Kiritilgan ma'lumotlarni tekshirish
3. Autentifikatsiyani to'g'ri sozlash
4. Muntazam xavfsizlik tekshiruvlarini o'tkazish
5. MongoDB versiyasini yangilab turish

## Samaradorlik Bo'yicha Maslahatlar

1. To'g'ri indekslardan foydalanish
2. Keshlashtirish (caching) ni qo'llash
3. So'rovlarni optimizatsiya qilish
4. Ma'lumotlar bazasi ishlashini kuzatib borish
5. Connection pooling dan foydalanish
