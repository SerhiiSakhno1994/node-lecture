const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks[0]);
      break;
    case "getById":
      const oneBook = await books.getById(id);
      console.log(oneBook);
      break;
    case "add":
      const newBook = await books.add(title, author);
      console.table(newBook);
      break;
    case "updateById":
      const updateBook = await books.updateById(id, title, author);
      console.table(updateBook);
      break;
    case "removeById":
      const removeBook = await books.removeById(id);
      console.table(removeBook);
      break;
  }
};

const actionIdx = process.argv.indexOf("--action");
if (actionIdx !== -1) {
  const action = process.argv[actionIdx + 1];
  invokeAction({ action });
}
