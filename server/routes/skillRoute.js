import express from 'express'
import { getSkills,createSkill,updateSkill,deleteSkill } from '../controllers/skillController.js';
import multer from 'multer'
const skillRouter = express.Router();
const upload = multer({dest:"uploads/"});
skillRouter.get('/get-skills',getSkills);
skillRouter.post('/create-skill',upload.single("image"),createSkill);
skillRouter.put('/update-skill/:id',upload.single("image"),updateSkill);
skillRouter.delete('/delete-skill/:id',deleteSkill);

export default skillRouter;