const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Hello world");

    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
