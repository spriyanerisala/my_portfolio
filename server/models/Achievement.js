import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String},
}, { timestamps: true });

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;