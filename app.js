console. log ("Web Serverni boshlash");
const express = require ("express");
const app = express();

const fs = require("fs");
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
})

// MongoDB Call
const db = require ("./server").db();

// 1 - Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 Session code

// 3 - Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - Routing code
app.get("/author", (req, res) => {
    res.render("author", {user: user});
});
app.get("/author1", (req, res) => {
    res.render("author1", {user: user});
});


// Create new item
app.post ("/create-item", (req, res) => {
    console.log("User is logged in /create-item");
    console.log("Step 2 : Frontend => to Backend"); //Step2
    console.log(req.body);

    console.log("Step 3 : Backend => to Database"); //Step3
    const new_reja = req.body.reja;

    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log("Step 4 : Database => to Backend"); //Step4
        console.log(data.ops[0]);
       
        if (err) {
            console.log(err);
            res.json({ error: "Xatolik yuz berdi!" });
        } else {
            // Send back the newly created item
            console.log("Step 5 : Backend => to Frontend"); //Step5
            res.json({ 
                _id: data.insertedId, 
                reja: new_reja
            });
        }
    });
});



// Read all items
app.get("/", function (req, res) {
    console.log("User is logged in /");
    db.collection("plans")
    .find()
    .toArray ((err, data) => {
        if (err) {
            console.log(err);
            res.end("Something went wrong!");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

// Delete all items
app.post("/delete-all", (req, res) => {
    db.collection("plans").deleteMany({}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({ error: "Something went wrong!" });
        } else {
            res.json({ success: true });
        }
    });
});

// Delete single item
app.post("/delete-item", (req, res) => {
    const id = new mongodb.ObjectId(req.body.id);
    db.collection("plans").deleteOne({_id: id}, (err, data) => {
        if(err) {
            console.log(err);
            res.json({error: "Ochirishda xatolik yuz berdi"});
        } else {
            res.json({success: true});
        }
    });
});

// Edit/Update item
app.post("/edit-item", (req, res) => {
    const id = new mongodb.ObjectId(req.body.id);
    db.collection("plans").findOneAndUpdate(
        {_id: id},
        {$set: {reja: req.body.new_reja}},
        {returnDocument: 'after'},
        (err, data) => {
            if(err) {
                console.log(err);
                res.json({error: "Ozgartirishda xatolik yuz berdi"});
            } else {
                res.json({success: true});
            }
        }
    );
});

module.exports = app;
