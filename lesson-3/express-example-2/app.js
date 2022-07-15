const express = require("express");
const app = express();

const books = require("./books");

app.get("/books", (req, res) => {
  // res.json(null);
  // res.send(null);
  // res.json(books);
  res.send(books);
});

app.listen(3001);
