const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is Running ok");
})

app.get("/api/users", (req, res) => {
    res.send(chats)
})

app.get("/api/users/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})

const PORT = process.env.PORT || 5500;

app.listen(5500, console.log(`"Server Started on PORT ${PORT} "`))