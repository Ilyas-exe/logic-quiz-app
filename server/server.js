import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionRoutes from './routes/questionRoutes.js';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes); 

// Simple Route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));