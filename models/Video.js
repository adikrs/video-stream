import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    userId:{
        type: String,
        required:true
    },
    imageUrl:{
        type: String,
        required:true,
    },
    videoUrl:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        default:[],
    },
    category:{
        type:String,
        default:[],
    },
    isBanned:{
        type:Boolean,
        default:false
    },
    duration:{
        type: String,
        required:true,
    },

},{timestamps:true})

export default mongoose.model("Video",VideoSchema);