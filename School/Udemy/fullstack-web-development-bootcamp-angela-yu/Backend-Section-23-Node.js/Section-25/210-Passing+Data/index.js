import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  const totalNumberOfLetters = fName.length + lName.length;
  console.log(totalNumberOfLetters);
  res.render("index.ejs", {number: totalNumberOfLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
