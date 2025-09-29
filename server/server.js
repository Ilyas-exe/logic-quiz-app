import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Simple Route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));