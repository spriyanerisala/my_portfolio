import Project from '../models/Project.js';
import cloudinary from '../config/cloudinary.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getProjects = asyncHandler(async(req,res)=>{
    const projects =await Project.find();
    return res.status(200).json({success:true,projects:projects});
})

export const createProject = asyncHandler(async(req,res)=>{
    let imageUrl = "";
    if(req.file){
        const result =await cloudinary.uploader.upload(req.file.path ,{
            folder:"portfolio"
        })
        imageUrl = result.secure_url;

        const project =await Project.create({
            ...req.body,image:imageUrl
        })
        return res.status(200).json({success:true,message:"Project created Successfully",data:project});
    }
})


export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {  returnDocument: "after" } 
  );

  if (!project) return res.status(404).json({ message: "Project not found" });

  return res.status(200).json({success:true,updatedData : project});
});


export const deleteProject = asyncHandler(async(req,res)=>{
    const project =await Project.findById(req.params.id);
    if(!project){
        return res.status(200).json({success:false,message:"Project not found"});
    }
    await Project.deleteOne(project);
    return res.status(200).json({success:true,message:"Project Deleted Successfully"})
})