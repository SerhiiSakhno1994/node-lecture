const fs = require("fs/promises");
//  const fs = require("fs").promises;

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const fileOperation = async ({ filePath, action, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      //   const data = await fs.readFile(filePath);
      //   const text = data.toString();
      //   console.log(text);
      break;
    case "add":
      const result = await fs.appendFile(filePath, data);
      console.log(result);
      break;
    case "replase":
      const color = await fs.writeFile(filePath, data);
      console.log(color);
  }
};

// fileOperation({ filePath: "./files/file.txt", action: "read" });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "add",
//   data: "\nТак говорив Заратустра",
// });
// fileOperation({
//   filePath: "./files/file.txt",
//   action: "replase",
//   data: "Так ",
// });
// fileOperation({
//   filePath: "./files/file2.txt",
//   action: "add",
//   data: "\nТак говорил Заратустра",
// });
fileOperation({
  filePath: "./files/file.txt",
  action: "replase",
  data: "ghjgk",
});
