const http = require ("http");
const mongodb = require ("mongodb");

let db;
const connectionString = "mongodb+srv://worldgoggo05:98x65zLMxhDgWu6q@cluster0.hxb9o.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT || 1904;
        server.listen(PORT, function() {
            console.log(
                `Server is running on port ${PORT}`);
});
    }
});