import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
