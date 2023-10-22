import { Schema, model, models } from "mongoose";

// Define a schema for transactions
const transactionSchema = new Schema({
  amount: Number,
  externalReference: String,
  status: String,
  type: String,
  phoneNumber: String,
  username: String,
});

const Transaction = models.Transaction || model("Transaction", transactionSchema);

export default Transaction;