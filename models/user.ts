import mongoose, { Schema } from "mongoose";
import Transaction from "./transaction";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      message: "Username is required",
    },
    password: {
      type: String,
      required: true,
      message: "Password is required",
    },

    fullName: {
      type: String,
      required: false,
    },
    schoolUrls: {
      type: Array,
      required: false,
    },
    freeBalance: {
      type: Number,
      required: false,
    },
    depositedBalance: {
      type: Number,
      required: false,
    },
    paidQuizIds: {
      type: Array,
      required: false,
    },
    transactions: [Transaction.schema],
    uploadedResourcesIds: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User =mongoose.models.User || mongoose.model("User", userSchema);

export default User;