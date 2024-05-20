const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "./.env" });
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("saaibq@twitter.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send(`<h2>Chai Aur Code</h2>`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
