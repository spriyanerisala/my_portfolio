import Skill from '../models/Skill.js'
import cloudinary from '../config/cloudinary.js'
import asyncHandler from '../middleware/asyncHandler.js'

export const getSkills = asyncHandler(async(req,res)=>{
    const skills = await Skill.find();
    return res.status(200).json({success:true,message:"All Skills retrieved",skill : skills});
})

export const createSkill = asyncHandler(async(req,res)=>{
    let imageUrl ="";
    if(req.file){
        const result= await cloudinary.uploader.upload(req.file.path,{folder:"skills"})
        imageUrl= result.secure_url
    }
    const skill = await Skill.create({...req.body,image:imageUrl})
    return res.status(200).json({success:true,message:"Skill added successfully",skill : skill});
})


export const updateSkill = asyncHandler(async (req, res) => {
   const skill = await Skill.findByIdAndUpdate( req.params.id, req.body, 
    { returnDocument: "after" } );
     if (!skill) return res.status(404).json({ message: "skill not found" });
      return res.status(200).json({success:true,updatedData : skill}); });

export const deleteSkill = asyncHandler(async(req,res)=>{
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ success: false, message: "Skill not found" });

  await skill.deleteOne();
  res.status(200).json({ success: true, message: "Skill deleted" });
})


