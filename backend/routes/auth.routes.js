import express from "express"
import { resertpassword, sendOtp, signIn,signOut,signUp, verifyOtp } from "../controllers/auth.controller.js"

const authRouter=express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",signIn)
authRouter.get("/signout",signOut)
authRouter.post("/send-otp",sendOtp)
authRouter.post("/verify-otp",verifyOtp)
authRouter.post("/reset-password",resertpassword)

export default authRouter