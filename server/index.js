import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/config/dbConnection.js';
import cors from 'cors';
import healthRoutes from './src/routes/health.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", healthRoutes);
const PORT = process.env.PORT || 3000;

dotenv.config();
await connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
