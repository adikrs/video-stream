import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config()


const connectApp = () => {
    console.log(process.env.MONGO)
    mongoose.connect(process.env.MONGO).then( ()=> {
        console.log("Connected to Database! ... ");
    }).catch((err) => {
        console.log(err);
        throw err;
    });
}

app.use(cookieParser());

app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/auth",authRoutes);


app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message  || "Something is wrong";
    return  res.status(status).json({
        success:false,
        status,
        message
    })
})

app.listen(8800, ()=>{
    console.log("Server Connected! :) ")
    connectApp();
})