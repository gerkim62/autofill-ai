import mongoose, { Schema } from "mongoose";
import Transaction from "./transaction";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      required: false,
    },
    schoolUrls: {
      required: true,
      type: Array,
    },
    freeBalance: {
      type: Number,
      required: true,
    },
    depositedBalance: {
      type: Number,
      required: true,
    },
    paidQuizIds: {
      type: Array,
      required: true,
    },
    apiKeys: {
      type: Array,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set a default value to the current date and time
    },
    transactions: [Transaction.schema],
    uploadedResourcesIds: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
