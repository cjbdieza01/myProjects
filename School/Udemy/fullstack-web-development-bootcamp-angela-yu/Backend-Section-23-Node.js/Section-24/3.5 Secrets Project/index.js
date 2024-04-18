//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

function getPassword(req, res, next) {
    const { password } = req.body;
    if (password === "ILoveProgramming") {
        next()

    } else {
        console.log("failed");
        res.status(401).send(`<h1>Failed</h1>`)
    }
}


function checkPassword(req, res, next) {
    const { password } = req.body;
    if (password === "ILoveProgramming") {
      next();
    } else {
      console.log("Incorrect password");
      // Assuming 'err' is not defined here, you can log the error message directly.
      // If you have an 'err' object defined somewhere, you can use it like console.log(err).
      // Additionally, you may want to consider sending an error response to the client.
      res.status(401).send("Unauthorized: Incorrect password");
    }
  }



app.use(getPassword);

app.get("/", (req, res) => {
    res.status(401).sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})