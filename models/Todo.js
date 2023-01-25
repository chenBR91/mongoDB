import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todoTask: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema)
//module.exports = mongoose.model("Todo", todoSchema)