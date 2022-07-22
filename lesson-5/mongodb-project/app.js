// yCxmujfei7hxZX7g

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connect success");
  })
  .catch((error) => error.message);
