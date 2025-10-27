import jwt from "jsonwebtoken"

const genToken=async(userId)=>{
try {
    const token=await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})  //sign for dene ke liye value
    return token
} catch (error) {
    console.log("error")
    
}
}
export default genToken