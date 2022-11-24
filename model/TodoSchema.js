const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  Title: {
    type: String,
    unique: true,
    required: [true, "Requied"],
  },
  tasks: {
    type: [{ task: { type: String } }],
  },
});

module.exports = mongoose.model("Todo", Todo);
