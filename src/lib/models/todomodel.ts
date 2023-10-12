import mongoose from "mongoose";

const todoModel = new mongoose.Schema({
  todo: { type: String, required: true },
});

export const TodoModel =
  mongoose.models.todos || mongoose.model("todos", todoModel);
