import 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
    });


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
