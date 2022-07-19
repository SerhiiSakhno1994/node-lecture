// yCxmujfei7hxZX7g

const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://Serhii:yCxmujfei7hxZX7g@cluster0.9gsmmsa.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST } = require("./config");
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => error.message);
