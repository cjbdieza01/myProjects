import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "4312",
  port: 8088,
});

db.connect()
  .then(() => {
    console.log(`Database is ready. . .`);
  })
  .catch((err) => {
    console.error(`Connection ERROR`, err.stack);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const countryCode = await db.query(
    `SELECT country_code FROM visited_countries`
  );
  let result = [];
  countryCode.rows.forEach((e) => {
    result.push(e.country_code);
  });
  console.log(result);
  res.render(`index.ejs`, {
    countries: result,
    total: result.length,
  });
});

app.post("/add", async (req, res) => {
  const data = await db.query(`SELECT * FROM countries`);
  console.log(data.rows);
  const addCountry = req.body.country;
  const country = addCountry.toLowerCase();
  console.log(country);
  const found = data.rows.findIndex((e) => e.country_name === addCountry);
  console.log(found);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
