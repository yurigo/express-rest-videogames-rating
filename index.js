require("dotenv").config();

const express = require("express");
const app = express();

const usersRoute = require("./routes/users.route");
const videogameRoute = require("./routes/videogames.route");
const scoreRoute = require("./routes/score.route");

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.use("/api/users", usersRoute);
app.use("/api/videogames", videogameRoute);
app.use("/api/scores", scoreRoute);

app.all("/api/*", (req, res, next) => {
  console.log(req.url);
  next({
    error: "Not found",
  });
});

app.use((err, req, res, next) => {
  console.log("error", err);
  res.json(err);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`http://localhost:${port}/api/users/callback/all`);
  console.log(`http://localhost:${port}/api/users/promise/all`);
  console.log(`http://localhost:${port}/api/users/async/await/all`);
  console.log(`http://localhost:${port}/api/users/all`);
  console.log(`http://localhost:${port}/api/users/get/3`);
  console.log(`http://localhost:${port}/api/videogames/all`);
  console.log(`http://localhost:${port}/api/videogames/get/3`);
  console.log(`http://localhost:${port}/api/videogames/get/97`);
  console.log(`http://localhost:${port}/api/videogames/load`);
  console.log(`http://localhost:${port}/api/scores/puntua/3/3/5`);
});
