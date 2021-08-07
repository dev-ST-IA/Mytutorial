const { writeFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./bigFile.txt", `Hello Big File ${i}\n`, { flag: "a" });
}
