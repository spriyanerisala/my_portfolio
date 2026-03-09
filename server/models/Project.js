import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name : {type:String,required:true},
    image:{type:String},
    stackUsed:[String],
    description:{type:String},
    liveDemo:{type:String},
    githubLink:{type:String},
    
},{
    timestamps:true
})

const Project = mongoose.model("Project",projectSchema);
export default Project;