import express from "express";
import bodyParser from "body-parser";

const PORT = 9000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
let blogs = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "email_1@email.com",
    category: "sports",
    title: "The Art of Endurance: Pushing Beyond Limits in Sports",
    text: "In the realm of sports, endurance stands as a cornerstone, separating the good from the great, the contenders from the champions. Whether it's the solitary grind of a marathon runner, the relentless pursuit of a cyclist climbing a steep ascent, or the unwavering focus of a tennis player in a grueling match, endurance is the silent force that propels athletes beyond their perceived limits. It's not just physical prowess but also mental fortitude, a willingness to embrace discomfort, and a refusal to succumb to fatigue. Endurance sports teach us that victory often lies not in the swift sprint but in the steady, determined stride towards the finish line. So lace up your shoes, saddle up your bike, or grab your racket because in the world of sports, the journey is often just as rewarding as the destination.",
  },
  {
    id: 2,
    name: "Lee Dela Vega",
    email: "lee_21@email.com",
    category: "sport",
    title: "The Thrill of the Game: Uniting Nations through Sport",
    text: "In the arena of sports, borders blur, and nationalities fade into insignificance as athletes from around the globe converge in the pursuit of excellence. Whether it's the thunderous roar of a soccer stadium packed with fans from every corner of the earth or the electric atmosphere of the Olympic Games, sport has a unique power to transcend cultural divides and foster unity. In these moments, it's not about where you're from but rather the passion you bring to the field, court, or track. Through shared triumphs and defeats, athletes inspire us to set aside differences and come together in celebration of human achievement. So let's raise our flags high, not as symbols of division, but as emblems of the diverse tapestry that makes the world of sports so vibrant and compelling.",
  },
  {
    id: 3,
    name: "Joseph Jimenez",
    email: "yosef_09@email.com",
    category: "movie",
    title: "Beyond the Screen: Exploring the Magic of Movie Soundtracks",
    text: "Movies are more than just visual spectacles; they're auditory journeys that transport us to distant worlds and evoke a myriad of emotions. Central to this cinematic experience is the often unsung hero: the movie soundtrack. From the iconic themes that instantly conjure images of heroes in capes to the subtle melodies that underscore moments of heartache and triumph, movie soundtracks have the power to elevate storytelling to new heights. They are the invisible threads that weave through the narrative, enhancing every scene with their emotive resonance. Whether it's the epic orchestral arrangements of a fantasy epic or the soul-stirring ballads of a romantic drama, movie soundtracks have a way of seeping into our consciousness and staying with us long after the credits roll. So next time you watch a film, take a moment to appreciate the magic of the music and let it carry you away on a cinematic adventure like no other.",
  },
];

app.get("/", (req, res) => {
  res.send(blogs);
});

app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blogData = blogs.find((b) => b.id === id);
  console.log(blogData);
  res.send(blogData);
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Not Found!" });
  }
  blogs.splice(index, 1);
  res.json("Success!");
});

app.listen(PORT, () => {
  console.log(`API is running on PORT: ${PORT}`);
});
