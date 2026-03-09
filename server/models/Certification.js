import mongoose from 'mongoose'

const certificationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,default:""},
    description:{type:String}
})

const Certification = mongoose.model("Certification",certificationSchema);
export default Certification;