import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/mongodb.js";
import projectRouter from "./routes/projectRoute.js";
import skillRouter from "./routes/skillRoute.js";
import certificateRouter from "./routes/certificateRoute.js";
import achievementRouter from "./routes/achievementRoute.js";
import contactRouter from "./routes/contactRoute.js";

dotenv.config();

const app = express();

app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(express.json());


app.use("/api/projects", projectRouter);
app.use("/api/skills", skillRouter);
app.use("/api/certs", certificateRouter);
app.use("/api/achievements", achievementRouter);
app.use("/api/contact", contactRouter);


app.get("/", (req, res) => {
  res.send("Welcome to my portfolio");
});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
 

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Server Error ❌", error);
    process.exit(1);
  }
};

startServer();