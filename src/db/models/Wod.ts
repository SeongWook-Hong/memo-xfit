import mongoose from "mongoose";

const WodSchema = new mongoose.Schema({
  date: { type: String, unique: true, required: true },
  wodType: { type: String, default: "" },
  timeCap: { type: String, default: "" },
  workout: { type: String, default: "" },
});

const Wod = mongoose.models["Wod"] || mongoose.model("Wod", WodSchema);

export default Wod;
