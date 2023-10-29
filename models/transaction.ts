import { Schema, model, models } from "mongoose";

// Define a schema for transactions
const transactionSchema = new Schema({
  amount: Number,
  externalReference: String,
  status: String,
  phoneNumber: String,
  username: String,
  user: {
    type:Schema.Types.ObjectId,
    ref: 'User' // The name of the User model
  }
});

const Transaction = models.Transaction || model("Transaction", transactionSchema);

export default Transaction;