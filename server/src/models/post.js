import mongoose from "mongoose";
import User from "./user.js";
import Confirmation from "./confirmation.js";
import Report from "./report.js";

const postSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    category:{
        type: String,
        enum: [
            "Traffic",
            "Flooding",
            "Power",
            "Other",
            "Events"
        ],
        required: true
    },
    text:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: Image,
        // Must also add where the post was created based on user location
    },
    location:{
        // Must add location of where post was made
    },
    confirmCount:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Confirmation,
    },
    reportCount:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Report,
    },
    hidden:{
        // Must add something for when it's hidden
    }

},{ timestamps: true })


const Post = new mongoose.model("Post", postSchema);

export default Post;