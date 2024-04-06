import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello From Server Side!")
    console.log(req.rawHeaders)
})

app.get("/about", (req, res) => {
    res.send("THis is the about page")
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})