import jwt from "jsonwebtoken"

//creating a function for gentoken and setting cookie
const generateTokenandsetCookie = (userId, res) => {

    //creating a token

    const token = jwt.sign({userId: userId}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    // {userId: userId} -> Payload: data inside JWT 
    // process.env.JWT_SECRET -> used to sign the token
    // {expiresIn: '7d'} -> valid for 7 days




    //setting the token as a cookie stored in user's browser

    //cookie name:"jwt" token name: "token"
    res.cookie("jwtcookie1", token, {
        maxAge: 7*24*60*60*1000, //in ms (cookie deletion time)
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development'
    })
    // httpOnly: true -> Cookie cannot be accessed by JavaScript && Protects against XSS attacks
    // sameSite: "strict" -> Cookie is sent only for same-site requests && Prevents CSRF attacks
    // secure: true -> Cookie sent only over HTTPS
}

export default generateTokenandsetCookie