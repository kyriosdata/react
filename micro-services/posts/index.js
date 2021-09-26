const express = require("express");
const { randomBytes } = require("crypto");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const posts = [];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = uuidv4();
  posts.push({
    id,
    ...req.body,
  });

  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
