import Achievement from "../models/Achievement.js";
import asyncHandler from "../middleware/asyncHandler.js";
import cloudinary from "../config/cloudinary.js"; // your cloudinary config


export const getAchievements = asyncHandler(async (req, res) => {
  const achievements = await Achievement.find({});
  res.status(200).json({ success: true, message: "All Achievements retrieved", achievements });
});


export const createAchievement = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  let imageUrl = "";

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, { folder: "achievements" });
    imageUrl = result.secure_url;
  }

  const achievement = await Achievement.create({ name, description, image: imageUrl });
  res.status(201).json({ success: true, achievement });
});


export const updateAchievement = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  let updateData = { name, description };

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, { folder: "achievements" });
    updateData.image = result.secure_url;
  }

  const achievement = await Achievement.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true, runValidators: true }
  );

  if (!achievement) return res.status(404).json({ message: "Achievement not found" });

  res.status(200).json({ success: true, updatedData: achievement });
});

export const deleteAchievement = asyncHandler(async (req, res) => {
  const achievement = await Achievement.findByIdAndDelete(req.params.id);
  if (!achievement) return res.status(404).json({ message: "Achievement not found" });

  res.status(200).json({ success: true, message: "Achievement deleted" });
});