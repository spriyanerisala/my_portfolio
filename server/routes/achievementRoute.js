import express from "express";
import { getAchievements, createAchievement, updateAchievement, deleteAchievement } from "../controllers/achievementController.js";
import multer from "multer";

const achievementRouter = express.Router();
const upload = multer({ dest: "uploads/" });

achievementRouter.get("/get-achievements", getAchievements);
achievementRouter.post("/create-achievement", upload.single("image"), createAchievement);
achievementRouter.put("/update-achievement/:id", upload.single("image"), updateAchievement);
achievementRouter.delete("/delete-achievement/:id", deleteAchievement);

export default achievementRouter;