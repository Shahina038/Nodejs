const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/subfolder/first.txt", "utf-8");

console.log(first);

writeFileSync("./content/subfolder/qwerty.txt", `result : ${first}`);

const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
    const first = result;
  }
  // console.log(result);
});

