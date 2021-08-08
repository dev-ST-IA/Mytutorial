const { createReadStream } = require("fs");

const stream = createReadStream("./8-Streams/bigFile.txt", {
  encoding: "utf-8",
  highWaterMark: 90000,
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./8-Streams/bigFile.txt',{highWaterMark:90000})
// const stream = createReadStream('../8-Streams/bigFile.txt',{encoding:'utf8'})

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log("error");
});
