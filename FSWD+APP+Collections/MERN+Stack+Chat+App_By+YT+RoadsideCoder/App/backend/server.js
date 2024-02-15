const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
    res.send("API is Running");
})

app.get("/api/users", (req, res) => {
    res.send(chats)
})

app.listen(5500, console.log("Server Started on PORT 5500"))