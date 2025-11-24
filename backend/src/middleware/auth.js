import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
   const token = req.headers.authorization?.split(" ")[1]; // Correct split
   if (!token) return res.status(401).json({ message: "NO TOKEN PROVIDED" });

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Correct spelling
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(401).json({ message: "User Not Found" });

      req.user = user;
      next();

   } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
   }
}
