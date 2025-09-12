import express from 'express';
import cors from 'cors';
import ChatRouter from './routes/ChatRouter.js';


const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// routes 
app.use('/api' , ChatRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 


