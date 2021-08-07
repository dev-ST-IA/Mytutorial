const http = require("http");

// const serve= http.createServer((req,res)=>{
//     res.end('Welcome')
// })

//Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("Yup this is working");
  }
});

server.listen(5000);
