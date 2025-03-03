import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: { type: String, require: "" },
  lastname: { type: String, require: "" },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  rank: { type: Number, default: 1 },
  isAdmin: { type: Boolean, default: false },
  task: [
    {
      name: { type: String, require: "" },
      level: { type: Number, default: 1 },
      price: { type: Number, default: 0 },
      state: { type: String, require: "" },
      media: {
        type: { type: String, require: "" },
        content: { type: String, require: "" },
      },
      isPaid: { type: Boolean, default: false },
      instruction: { type: String, require: "" },
    },
  ],
  missedTask: { type: Number, default: 0 },
  completedTask: { type: Number, default: 0 },
  account: {
    balance: { type: Number, default: 0 },
    withdrawer: {
      bankName: { type: String, require: "" },
      bankAcctNo: { type: Number, default: 123456890 },
    },
  },
  password: { type: String, require: true },
});

const User = models?.User || mongoose.model("User", UserSchema);
export default User;
