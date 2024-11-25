# Frontend, Delete va Update Operatsiyalari

## MongoDB CRUD Metodlari

### 1. CREATE (Yaratish) Metodlari
```javascript
// insertOne() - Bitta yangi hujjat (dokument) qo'shish
db.collection("plans").insertOne({reja: "Yangi reja"});

// insertMany() - Bir nechta hujjatlarni qo'shish
db.collection("plans").insertMany([
    {reja: "Birinchi reja"},
    {reja: "Ikkinchi reja"}
]);
```

### 2. READ (O'qish) Metodlari
```javascript
// find() - Barcha hujjatlarni topish
db.collection("plans").find();

// findOne() - Bitta hujjatni topish
db.collection("plans").findOne({reja: "Birinchi reja"});

// find() with filter - Shartga mos hujjatlarni topish
db.collection("plans").find({status: "active"});

// find() with limit - Ma'lum sondagi hujjatlarni olish
db.collection("plans").find().limit(5);
```

### 3. UPDATE (Yangilash) Metodlari
```javascript
// updateOne() - Bitta hujjatni yangilash
db.collection("plans").updateOne(
    {_id: objectId},  // qaysi hujjatni yangilash
    {$set: {reja: "Yangilangan reja"}}  // yangi qiymat
);

// updateMany() - Ko'p hujjatlarni yangilash
db.collection("plans").updateMany(
    {status: "active"},  // qaysi hujjatlarni yangilash
    {$set: {status: "completed"}}  // yangi qiymat
);
```

### 4. DELETE (O'chirish) Metodlari
```javascript
// deleteOne() - Bitta hujjatni o'chirish
db.collection("plans").deleteOne({_id: objectId});

// deleteMany() - Ko'p hujjatlarni o'chirish
db.collection("plans").deleteMany({status: "completed"});
```

## Frontend Qismi

### 1. HTML Struktura (reja.ejs)
```html
<div class="container">
    <!-- Yangi reja qo'shish -->
    <form id="create-form" action="/create-item" method="POST">
        <input name="item" placeholder="Yangi reja...">
        <button>Qo'shish</button>
    </form>

    <!-- Rejalar ro'yxati -->
    <ul id="item-list">
        <% items.forEach(function(item) { %>
            <li data-id="<%= item._id %>">
                <span class="item-text"><%= item.reja %></span>
                <button class="edit-me">O'zgartirish</button>
                <button class="delete-me">O'chirish</button>
            </li>
        <% }) %>
    </ul>
</div>
```

### 2. Frontend JavaScript (browser.js)
```javascript
// O'zgartirish tugmasi bosilganda
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/update-item", {
                id: e.target.parentElement.getAttribute("data-id"),
                new_input: userInput
            }).then(response => {
                e.target.parentElement.querySelector(".item-text").innerHTML = userInput;
            }).catch(err => {
                console.log("Iltimos qaytadan harakat qiling");
            });
        }
    }
});

// O'chirish tugmasi bosilganda
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq o'chirmoqchimisiz?")) {
            axios.post("/delete-item", {
                id: e.target.parentElement.getAttribute("data-id")
            }).then(response => {
                e.target.parentElement.remove();
            }).catch(err => {
                console.log("Iltimos qaytadan harakat qiling");
            });
        }
    }
});
```

### 3. Backend API (app.js)
```javascript
// Update operatsiyasi
app.post("/update-item", (req, res) => {
    db.collection("plans").findOneAndUpdate(
        { _id: new ObjectId(req.body.id) },
        { $set: { reja: req.body.new_input } },
        (err, data) => {
            if (err) {
                res.json({ status: "Xatolik" });
            } else {
                res.json({ status: "Success" });
            }
        }
    );
});

// Delete operatsiyasi
app.post("/delete-item", (req, res) => {
    db.collection("plans").deleteOne(
        { _id: new ObjectId(req.body.id) },
        (err, data) => {
            if (err) {
                res.json({ status: "Xatolik" });
            } else {
                res.json({ status: "Success" });
            }
        }
    );
});
```

## Filter Operatorlari
```javascript
// $gt - katta
db.collection("plans").find({age: {$gt: 18}});

// $lt - kichik
db.collection("plans").find({age: {$lt: 18}});

// $in - ro'yxatda mavjud
db.collection("plans").find({status: {$in: ["active", "pending"]}});

// $regex - matn qidirish
db.collection("plans").find({reja: {$regex: "dars"}});
