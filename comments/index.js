const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comment-add", (req, res) => {
  const comment_id = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: comment_id, content });

  res.status(201).send(comments);
});

app.listen(process.env.PORT, () => {
  console.log(`comments server is running on port ${process.env.PORT}`);
});
