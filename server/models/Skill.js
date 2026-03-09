import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name:{type:String},
    image:{type:String}
})

const Skills = mongoose.model("SKill",skillSchema)
export default Skills;