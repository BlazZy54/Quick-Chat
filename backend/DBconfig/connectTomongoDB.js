import mongoose from "mongoose"

export const connToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    }
    catch(err){
        console.log("Error in connecting database: " + err.message)
        process.exit(1) //1 means failure && 0 means success
    }
}