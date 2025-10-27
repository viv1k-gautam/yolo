import bcrypt from "bcryptjs"

const hashedPassword =await bcrypt.hash(password,10)
user=await User.create({
    fullName,
    email,
    role,
    mobile,
    password:hashedPassword
})