import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenandsetCookie from "../JWT/generatetokenandsetCookie.js"

export const signup = async (req, res) => {

    const { fullName, username, password, confirmPassword, gender } = req.body


    if (password !== confirmPassword) return res.status(400).json({ status: false, error: "Passwords don't match" })
    if (await User.findOne({ username })) return res.status(400).json({ status: false, error: "Username already exists" })


    //HASH PASSWORD HERE -> coz if someone get access to our database they can see all the username and passwords
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt) //gets hashed password 


    const pfp = `https://api.dicebear.com/7.x/bottts/svg?seed=${Math.random()}` //api for getting random pfp


    try {
        const newuser = new User({ fullName, username, password: hashedpassword, gender, profilePic: pfp })
        await newuser.save()

        //GENERATE JWT TOKEN and set it as Cookie
        generateTokenandsetCookie(newuser._id, res)

        return res.status(201).json({
            status: true, message: "User created successfully",
            user: { id: newuser._id, fullName: newuser.fullName, username: newuser.username, profilePic: newuser.profilePic }
        })
    }
    catch (error) {
        console.log("Error in signup controller: " + error.message)
        return res.status(500).json({ status: false, error: "Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        const ispasswordValid = await bcrypt.compare(password, user?.password || "")

        if (!user || !ispasswordValid) return res.status(400).json({ error: "Invalid username or password" })

        generateTokenandsetCookie(user._id, res) //generate JSON for cookie 

        return res.status(200).json({
            status: true, message: "Logged in successfully",
            user: { id: user._id, fullName: user.fullName, username: user.username, profilePic: user.profilePic }
        })

    }
    catch (err) {
        console.log("Error in login controller: " + err.message)
        return res.status(500).json({ status: false, error: "Server Error" })
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwtcookie1", "", {maxAge: 0})
        return res.status(200).json({ status: true, error: "Logged out successfully" })
    }
    catch (err) {
        console.log("Error in logout controller: " + err.message)
        return res.status(500).json({ status: false, error: "Server Error" })
    }
}