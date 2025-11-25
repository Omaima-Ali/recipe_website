import express from "express";
import cors from "cors";
import { connectDB } from './config/db.js';
import authRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());   

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Export the app
export default app;
