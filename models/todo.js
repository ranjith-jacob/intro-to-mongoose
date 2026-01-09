const mongoose = require("mongoose");

//then, define the schema, this is the blueprint

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
});

//contains functionality to perform CRUD on a MongoDB collection
const Todo = mongoose.model("Todo", todoSchema);

//Need to export it to access it in the app [(]i.e the directory being built]
module.exports = Todo;

