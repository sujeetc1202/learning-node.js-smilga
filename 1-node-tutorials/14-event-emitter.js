// get back the class
// if want custom extend fron=m the class
// otherwise just for emitting or handling the events create instance
const EventsEmitter = require("events");

const customEmitter = new EventsEmitter();

// on or emit method
// keep tracks of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
  console.log(`data received of user ${name}, and id ${id}`);
});

customEmitter.on("response", () => {
  console.log("other logic will be written here in future");
});

customEmitter.emit("response", "john", 34);
