import express from 'express';
import dotenv from 'dotenv/config';
import authRoutes from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import { connectDB } from './lib/db.js';

const app = express();
//  app.get('/api/auth/signup', (req, res) => {
//     res.send('SignUp Route');
//  })
//  app.get('/api/auth/login', (req, res) => {
//     res.send('LogIn Route');
//  })
//   app.get('/api/auth/logout', (req, res) => {
//     res.send('LogOut Route');
//  })
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use(cookieParser());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    connectDB();
})