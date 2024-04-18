import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const app = express();
const PORT = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the path to the data folder
const dataFolderPath = path.join(__dirname, 'data');

// Function to load data from the JSON file
async function loadData() {
    try {
        const data = await readFile(path.join(dataFolderPath, 'data.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading data from file:', error);
        return null;
    }
}

// Load data when the server starts
let jsonData = null;
loadData().then(data => {
    jsonData = data;
    console.log('Data loaded successfully:', jsonData);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).render("index.ejs");
})

app.get('/register', (req, res) => {
    res.render("registration-form.ejs");
})

app.get('/post-a-quote', (req, res) => {
    res.render('post-a-quote.ejs')
})

// Route handler to handle posting new quotes
app.post('/quotes', async (req, res) => {
    const { quote, author } = req.body;
    
    // If jsonData is not loaded yet, return an error
    if (!jsonData) {
        return res.status(500).send('Data not loaded yet');
    }
    
    // Merge new quote with existing data
    const newData = [...jsonData, { quote, author }];
    
    try {
        // Write the merged data back to a new JSON file
        await writeFile(path.join(dataFolderPath, 'newData.json'), JSON.stringify(newData, null, 2));
        console.log('Data written to file successfully');
        res.status(200).send('Data written to file successfully');
    } catch (error) {
        console.error('Error writing data to file:', error);
        res.status(500).send('Error writing data to file');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})
