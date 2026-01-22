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
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
//UserModel is for using in backend   collection name will become: 'users' by mongoose but model name will be User in database
export default User