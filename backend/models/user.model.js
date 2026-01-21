import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    profilePic: {
        type: String,
        required: false,
        default: ""
    }
})

const User = mongoose.model('User', userSchema)
                    //collection name will become: 'users' by mongoose
export default User