import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rank: { type: Number, default: 1 },
  type: { type: String, default: "user" },
  task: [
    {
      name: String,
      level: { type: Number, default: 1 },
      price: Number,
      state: String,
      media: {
        type: String,
        content: String,
      },
      isPaid: { type: Boolean, default: false },
      instruction: String,
    },
  ],
  missedTask: { type: Number, default: 0 },
  completedTask: { type: Number, default: 0 },
  account: {
    balance: { type: Number, default: 0 },
    withdrawer: {
      bankName: String,
      bankAcctNo: Number,
    },
  },
  password: { type: String, require: true },
});

const User = models.User || mongoose.model("User", UserSchema);
export default User;
