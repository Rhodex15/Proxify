import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import "dotenv/config";
import express from 'express';
import connectDB from './src/config/dbConnection.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

async function startServer() {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running and listening on port ${PORT}`);
        });
    }
    catch(error){
        console.error("Error starting the server:", error);
        process.exit(1)
    }
}

startServer();