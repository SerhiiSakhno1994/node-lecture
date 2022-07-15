const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const moment = require("moment");

const books = require("./books");
const app = express();
app.use(cors());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
  next();
});

// app.use((req, res, next) => {
//   if (5 > 4) {
//     console.log("First middleware");
//   }
//   console.log("First");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   next();
// });

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000);
