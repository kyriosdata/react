const express = require("express");
const { randomBytes } = require("crypto");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const comments = commentsByPostId[req.params.id] || [];
  res.send(comments);
});

app.post("/posts/:id/comments", (req, res) => {
  const id = uuidv4();
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({
    id,
    ...req.body,
  });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Listening on port 4001...");
});
