import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",               //ref means by Model name inside DB(for linking model name) -> const User = mongoose.model('ModelnameInsideDB', userSchema)
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
    //createdAt, updatedAt => message.createdAt = 15:30 12/12/2023
}, {timestamps: true})


// const UserModel = mongoose.model('User', userSchema)
//UserModel is for using in backend   collection name will become: 'users' by mongoose but model name will be 'User' in database

const Message = mongoose.model('Message', messageSchema)
export default Message