const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/post-add", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen(process.env.PORT, () => {
  console.log(`posts server is running on port ${process.env.PORT}`);
});
