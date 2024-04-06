import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello From Server Side!")
    console.log(req.rawHeaders)
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})