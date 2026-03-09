import express from 'express';
import multer from 'multer';
import { createProject,updateProject,deleteProject,getProjects } from '../controllers/projectContoller.js';

const projectRouter  =express.Router();
const upload = multer({dest:"uploads/"});
projectRouter.get("/get-projects",getProjects);
projectRouter.post("/create-project",upload.single("image"),createProject);
projectRouter.put("/update-project/:id",upload.single("image"),updateProject);
projectRouter.delete("/delete-project/:id",deleteProject);

export default projectRouter;