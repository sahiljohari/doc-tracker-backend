import mongoose from "mongoose";

// Define the schema for database
const Schema = mongoose.Schema;
export const DocSchema = new Schema({
  docName: {
    type: String,
    required: "Enter Document name"
  },
  status: {
    type: String,
    required: "Enter Document status"
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  expireDate: {
    type: Date,
    default: Date.now
  }
});
