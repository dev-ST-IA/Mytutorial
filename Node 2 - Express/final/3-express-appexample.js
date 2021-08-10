const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar/index.html"));
// adding to static assests
// SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("Resourece not found");
});

app.listen(5000, () => {
  console.log("server is listening");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
