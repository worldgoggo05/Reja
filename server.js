console. log ("Web Serverni boshlash");
const express = require ("express");
const app = express();
const http = require ("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
})

// 1 - Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 Session code

// 3 - Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - Routing code
// app.get("/hello", function (req, res) {
//     res.end("<h1 style='color: red;'> HELLO WORLD</h1>");
// });

// app.get("/gift", function (req, res) {
//     res.end("<h1 style='background-color: red;'> Siz sovg'alar sahifasidasiz </h1>");
// });

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});
app.get("/author1", (req, res) => {
    res.render("author1", {user: user});
});


app.post ("/create-item", (req, res) => {
    console.log(req);
    res.json({ test: "success "});
});

app.get("/", function (req, res) {
    res.render("reja");
});


const server = http.createServer(app);
let PORT = 3000;
server .listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});