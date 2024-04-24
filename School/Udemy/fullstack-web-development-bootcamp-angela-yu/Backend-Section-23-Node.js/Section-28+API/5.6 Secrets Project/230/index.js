import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";




const app = express();
const PORT = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

const API_URL = "https://secrets-api.appbrewery.com";


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random")
        
        res.render("index.ejs", {
            secret : result.data.secret,
            user : result.data.username
        })
    } catch (error) {
        console.error(error.message)
    }
})





app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
























// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
