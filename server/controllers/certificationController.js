import asyncHandler from '../middleware/asyncHandler.js'
import Certification from '../models/Certification.js'
import cloudinary from '../config/cloudinary.js';



export const getCertifications = asyncHandler(async (req, res) => {
  const certs = await Certification.find();
  res.status(200).json({ success: true, certifications: certs });
});


export const createCertification = asyncHandler(async (req, res) => {
  let imageUrl = "";
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, { folder: "certifications" });
    imageUrl = result.secure_url;
  }
  const cert = await Certification.create({ ...req.body, image: imageUrl });
  res.status(200).json({ success: true, message: "Certification created", data: cert });
});


export const updateCert = asyncHandler(async (req, res) => {
  const cert = await Certification.findByIdAndUpdate(
    req.params.id,
    req.body,
    {  returnDocument: "after" } 
  );

  if (!cert) return res.status(404).json({ message: "Certification not found" });

  return res.status(200).json({success:true,updatedData : cert});
});



export const deleteCertification = asyncHandler(async (req, res) => {
  const cert = await Certification.findById(req.params.id);
  if (!cert) return res.status(404).json({ success: false, message: "Certification not found" });

  await cert.deleteOne();
  res.status(200).json({ success: true, message: "Certification deleted" });
});