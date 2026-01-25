import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiversocketId, io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {
    try{
        const {id: receiverId} = req.params          //from params
        const {_id: senderId} = req.user           //get it from user which is added by the middleware protectRoutes.js after authentication
        const {message} = req.body         //got from user reqbody

        // find conversation
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}  //{$all: [senderId, receiverId]} means array has both only (order don't matter) // good for 1-1 chat
        })

        //if converation !exist create one
        if(!conversation) conversation = new Conversation({participants: [senderId, receiverId]})
        
        //create a message and push it's id in conversation
        const new_message = new Message({senderId, receiverId, message})
        conversation.messages.push(new_message._id)

        //save or updated them in database
        // await new_message.save() // await conversation.save()  -> will updated one by one
        await Promise.all([new_message.save(), conversation.save()])    // -> run parallely

        //SOCKET IO FUNCTIONALITY

        // after saving data in DB we will get the receiver SocketID from the fucntion in socket.js
        const receiverSocketID = getReceiversocketId(receiverId)

        //if hes online we'll emit the message to the receiver
        if(receiverSocketID) io.to(receiverSocketID).emit("NewMessage", new_message)



        res.status(201).json({status: true, message: new_message})
    }
    catch(err){
        console.log("Error in sendMessage controller: " + err.message)
        return res.status(500).json({ status: false, error: "Server Error" })
    }
}

export const getMessage = async (req, res) => {
    try{
        const {id: receiverId} = req.params
        const {_id: senderId} = req.user    //from middleware

        const conversation = await Conversation.findOne({
          participants: {$all: [senderId, receiverId]}
        })
        .populate("messages")
        // populate() replaces stored ObjectId references with the actual documents they point to by checking the schema for "ref" 
        // in Coversation schema i did "ref" to Message model name     messages: [{type: mongoose.Schema.Types.ObjectId,ref: "Message",default: [],}]
        // so it will give us array of messages objects

        if(!conversation) return res.status(200).json([]) 

        const messages = conversation.messages
        res.status(200).json(messages)
    }
    catch(err){
        console.log("Error in getMessage controller: " + err.message)
        return res.status(500).json({ status: false, error: "Server Error" })
    }
}