import jwt from 'jwt';
import User from '../models/user.model.js';
export const authMiddleware=async(req,res,next)=>{
 const token=req.headers.authorization?.split("");
 if(!token) return res.status(401).json({
    message:"NO TOKEN PROVIDED"
 })
 try {
    const decoded=jwt.verify(token,proccess.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if(!user) return res.status(401).json({message:"User Not Found"});
    req.user=user;
    next();

 } catch (error) {
  return  res.status(401).json({ message: "Invalid token" });
 }
}