import express from 'express';
import { register, login, getProfile, logout } from '../controllers/user.Controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// User routes
router.post('/register', register);               // Register a new user
router.post('/login', login);                     // Login an existing user
router.get('/profile', authMiddleware, getProfile); // Get logged-in user's profile
router.post('/logout', authMiddleware, logout);     // Logout user

export default router;
