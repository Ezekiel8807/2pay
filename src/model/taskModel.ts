import mongoose, { models } from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: { type: String, require: true }, /// task name is required
  level: { type: Number, default: 1 },
  price: { type: Number, require: true }, /// task price is required
  socialTarget: { type: String, default: "" },
  media: {
    type: {
      type: String,
      enum: ["image", "video", "others"],
      default: "others",
    },
    content: { type: String, default: "" },
  },
  link: { type: String, default: "" },
  isPaid: { type: Boolean, default: false },
  instruction: { type: String, require: true }, /// task instructin is required
});

const Task = models?.Task || mongoose.model("Task", TaskSchema);
export default Task;
