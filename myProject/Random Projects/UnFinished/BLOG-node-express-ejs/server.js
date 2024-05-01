import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;
const API_URL = "http://localhost:9000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/`);
    console.log(result.data);
    res.render("index.ejs", {
      data: result.data,
    });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/edit-blog/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const result = await axios.get(`${API_URL}/edit/${req.params.id}`);
    res.render("edit-template.ejs", {
      data: result.data,
      heading: "Edit",
    });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/delete-blog/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await axios.delete(`${API_URL}/delete/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
