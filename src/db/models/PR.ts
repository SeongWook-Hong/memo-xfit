import mongoose from "mongoose";

const PRSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  records: [
    {
      movement: { type: String, required: true },
      record: { type: Number, required: true },
      date: { type: String, required: true },
    },
  ],
});

const PR = mongoose.models["PR"] || mongoose.model("PR", PRSchema);

export default PR;
