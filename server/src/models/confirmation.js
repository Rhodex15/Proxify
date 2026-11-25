import mongoose from "mongoose";


const confirmSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Post,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },

}, {timestamps: true})

const Confirmation = mongoose.model("Confirmation", confirmSchema);

export default Confirmation;