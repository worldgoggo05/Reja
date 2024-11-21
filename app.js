console. log ("Web Serverni boshlash");
const express = require ("express");
const app = express();

const fs = require("fs");

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


app.post ("/create-item", (req, res) => {
    console.log("User is logged in /create-item");
    console. log (req.body);
    const new_reja = req.body.item;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong!");
        } else {
            res.end("successfully added");
        }
    });
});

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

module.exports = app;
