const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};
app.get("/posts/:id/comments", (req, res) => {
  res.send(posts);
});

app.post("/posts/:id/comment-add", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen(process.env.PORT, () => {
  console.log(`comments server is running on port ${process.env.PORT}`);
});
