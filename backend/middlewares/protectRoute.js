import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
    try{
        const {jwtcookie1} = req.cookies //get the token via name

        if(!jwtcookie1) return res.status(401).json({error: "Unauthorized - No Token Provided"})  //401: Unauthorized

        //verify the token
        const cookieobject = jwt.verify(jwtcookie1, process.env.JWT_SECRET) //we get cookie object from jwtcookie1 which is a string if verified, else null

        if(!cookieobject) return res.status(401).json({error: "Unauthorized - Invalid Token"})  //401: Unauthorized

        //find user and saved (except password field)
        const user = await User.findById(cookieobject.userId).select("-password")

        if(!user) return res.status(401).json({error: "User not found"})
        
        req.user = user //added req.user to user request used by another next function

        //call the next function as its just a middleware
        next()
    }
    catch(error){
        console.log("Error in protectRoute Middleware", error.message)
        return res.status(500).json({error: "Server Error"})
    }
}

export default protectRoute