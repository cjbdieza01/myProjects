import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    let type = "a weekday";
  let adv = "it's time to work hard";
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
      })
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
