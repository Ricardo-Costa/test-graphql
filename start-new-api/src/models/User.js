import mongoose from "mongoose"

const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    // email: String, // optional
    email: {
        type: String
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

export default mongoose.model("User", User)