import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: { type: String, default: "" },
  lastname: { type: String, default: "" },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  rank: { type: Number, default: 1 },
  isAdmin: { type: Boolean, default: false },
  tasks: [
    {
      name: { type: String, default: "" },
      level: { type: Number, default: 1 },
      price: { type: Number, default: 0 },
      state: { type: String, default: "" },
      media: {
        type: { type: String, default: "" },
        content: { type: String, default: "" },
      },
      isPaid: { type: Boolean, default: false },
      instruction: { type: String, default: "" },
    },
  ],
  missedTask: { type: Number, default: 0 },
  completedTask: { type: Number, default: 0 },
  account: {
    balance: { type: Number, default: 0 },
    withdrawer: {
      bankName: { type: String, default: "" },
      bankAcctNo: { type: Number, default: 123456890 },
    },
  },
  password: { type: String, require: true },
});

const User = models?.User || mongoose.model("User", UserSchema);
export default User;
