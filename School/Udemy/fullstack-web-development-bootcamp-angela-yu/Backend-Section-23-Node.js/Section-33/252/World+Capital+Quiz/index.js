// Import Required Modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Configure Database Connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "4312",
  port: 8088,
});

// Initialize Express App and Middleware
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to the Database
db.connect();

// Fetch Quiz Data from Database
let quiz = [];
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

// Initialize Game State
let totalCorrect = 0;
let currentQuestion = {};

// Helper Function to Get Next Question
async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

// Route to Serve Home Page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
  console.log(quiz);
});

// Route to Handle Answer Submission
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
