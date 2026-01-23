import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

router.get('/', (req, res) => {
    const {jwtcookie1} = req.cookies

    if(!jwtcookie1) return res.json({status: false, message: "Not Logged In"})
    
    const cookieobj = jwt.verify(jwtcookie1,process.env.JWT_SECRET)
    if(!cookieobj) return res.status(400).json({status: false, message: "Not Logged In"})
    
    return res.json({status: true, message: "Logged In"})
})

export default router