import express from "express";
import multer from "multer";
import { getCertifications,  createCertification, updateCert , deleteCertification  } from "../controllers/certificationController.js";

const certificationRouter = express.Router();
const upload = multer({ dest: "uploads/" });

certificationRouter.get("/get-certs", getCertifications);
certificationRouter.post("/create-cert", upload.single("image"), createCertification);
certificationRouter.put("/update-cert/:id", upload.single("image"), updateCert);
certificationRouter.delete("/delete-cert/:id", deleteCertification);

export default certificationRouter;