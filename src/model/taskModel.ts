import mongoose, { models } from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  level: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
  media: {
    type: { type: String, default: "" },
    content: { type: String, default: "" },
  },
  link: { type: String, default: "" },
  isPaid: { type: Boolean, default: false },
  instruction: { type: String, default: "" },
});

const Task = models?.Task || mongoose.model("Task", TaskSchema);
export default Task;
