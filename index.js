import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config()

const connectApp = () => {
    mongoose.connect(process.env.MONGODB).then( ()=> {
        console.log("Connected to Database! ... ");
    }).catch((err) => {
        console.log(err);
        throw err;
    });
}

app.listen(8800, ()=>{
    console.log("Server COnnected! :) ")
    connectApp();
})