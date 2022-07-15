const express = require("express");
const { nanoid } = require("nanoid");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = books.find((item) => item.id === id);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Books with id=${id} not found`,
    });
  }
  res.json({
    status: "succes",
    code: 200,
    data: {
      result,
    },
  });
});

router.post("/", (req, res) => {
  const newBook = { id: nanoid(), ...req.body };
  books.push(newBook);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: {
      result: newBook,
    },
  });
});

module.exports = router;
