import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './config/mongodb.js';
import projectRouter from './routes/projectRoute.js';
import skillRouter from './routes/skillRoute.js';
import certificateRouter from './routes/certificateRoute.js';
import achievementRouter from './routes/achievementRoute.js';
import contactRouter from './routes/contactRoute.js';
dotenv.config();
await connectDB();

const app =express();
app.use(cors());
app.use(express.json());


app.use("/api/projects",projectRouter);
app.use("/api/skills",skillRouter);
app.use("/api/certs",certificateRouter);
app.use("/api/achievements",achievementRouter);
app.use('/api/contact',contactRouter);

app.use('/',(req,res)=>{
    res.send("Welcomt to my portfolio");
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})