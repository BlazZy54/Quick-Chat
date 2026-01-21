import User from "../models/user.model"

export const signup = async (req, res) => {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if (password !== confirmPassword) res.status(400).json({ error: "Passwords don't match" })

    if (await User.findOne({ username })) res.status(500).json({ error: "Username already exists" })

    //HASH PASSWORD HERE

    const boyProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=boy-${Math.random()}`
    const girlProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=girl-${Math.random()}`

    const newuser = new User({ fullName, username, password, gender, profilePic: gender === 'Male' ? boyProfilePic : girlProfilePic })


}

export const login = (req, res) => {
    res.send("login")
}

export const logout = (req, res) => {
    res.send("logout")
}