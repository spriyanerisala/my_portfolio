import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/create-contact", createContact);          // POST /api/contact
contactRouter.get("/get-contacts", getContacts);            // GET /api/contact (optional for admin)

export default contactRouter;