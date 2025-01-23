const mongoose = require("mongoose");

const Taskdata = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", Taskdata);

module.exports = Task; 
