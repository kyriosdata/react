const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Simula SGBD em RAM
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = uuidv4();

  // Ignore post cujo título já existe
  if (Object.keys(posts).find((k) => posts[k].title === req.body.title)) {
    res.status(200).send(posts[id]);
    return;
  }

  posts[id] = {
    id,
    ...req.body,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Posts service listening on port 4000...");
});
