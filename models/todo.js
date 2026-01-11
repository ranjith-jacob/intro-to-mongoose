const mongoose = require("mongoose");

//then, define the schema, this is the blueprint

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
});

todoSchema.pre("save", function (next) {
  const docToBeSaved = this
  if (docToBeSaved.text) {
    docToBeSaved.text = docToBeSaved.text[0].toUpperCase() + docToBeSaved.text.slice(1);
  }
  //  next();
  //  console.log("testing next:", next);
});

//contains functionality to perform CRUD on a MongoDB collection
const Todo = mongoose.model("Todo", todoSchema);

//Need to export it to access it in the app [i.e the directory being built]
module.exports = Todo;

