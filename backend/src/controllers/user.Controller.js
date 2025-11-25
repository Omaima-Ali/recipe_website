import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// JWT token generator
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// ---------------- REGISTER ----------------
// Function to register a new user
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User registered successfully",
            newUser: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: generateToken(newUser._id)
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// ---------------- LOGIN ----------------
// Function to login an existing user
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return res.status(400).json({ message: "Password does not match" });

        // Set cookie
        res.cookie("token", generateToken(user._id), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
                savedRecipes: user.savedRecipes,
                submittedRecipes: user.submittedRecipes
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Function to logout user by clearing token cookie
export const logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
         return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
}

// Function to get the profile of logged-in user
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
