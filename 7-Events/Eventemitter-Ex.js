const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//first emit wont work - order of code matters
customEmitter.emit("response");

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here `);
});

customEmitter.emit("response", "john", 34);

// Built-in modules use events emitter
