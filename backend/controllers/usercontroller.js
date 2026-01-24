import User from "../models/user.model.js"

export const getUsersforSidebar = async (req, res) => {
    try{
        const {_id: senderId} = req.user
        const filteredUsers = await User.find({_id: {$ne: senderId}}).select("-password")  //find all the users not equal to senderId
        return res.status(200).json(filteredUsers)
    }
    catch(err){
        console.log("Error in getUsersforSidebar Controller: ",err.message)
        res.status(500).json({error: "Server Error"})
    }
}