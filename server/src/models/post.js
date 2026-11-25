import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    category: {
        type: String,
        enum: [
            "Traffic",
            "Flooding",
            "Power",
            "Events",
            "Deals",
            "Other"
        ],
        required: true
    },

    text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280
    },

    imageUrl: {
        type: String,
        default: null
    },

    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    confirmCount: {
        type: Number,
        default: 0
    },

    reportCount: {
        type: Number,
        default: 0
    },

    hidden: {
        type: Boolean,
        default: false
    },

    expiresAt: {
        type: Date,
        required: true
    }

}, { timestamps: true });

postSchema.index({ location: "2dsphere" });
postSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Post = mongoose.model("Post", postSchema);

export default Post;
