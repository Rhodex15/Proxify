import mongoose from "mongoose";
import User from "./user.js"
import Post from "./post.js"

const reportSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Post,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    reason:{
        type: String,
        trim: true,
        required: true,
    }
}, {timestamps: true});


const Report = new mongoose.model("Report", reportSchema);
export default Report;