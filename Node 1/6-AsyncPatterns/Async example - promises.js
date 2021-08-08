const { readFile, writeFile } = require("fs/promises");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// Oversimplified version

const start = async () => {
  try {
    const first = await readFile("./3-modules/content/first.txt", "utf8");
    const second = await readFile("./3-modules/content/second.txt", "utf8");
    const text = `${first}\n${second}\nappended using util module`;
    const output = await writeFile(
      "./3-modules/content/result-async.txt",
      text
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

//const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const writeText = (path, text, flag) => {
//   return new Promise((resolve, reject) => {
//     writeFile(
//       path,
//       text,
//       "utf8",
//       (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve("Finished Writing");
//         }
//       },
//       { flag }
//     );
//   });
// };

// getText("./3-modules/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
