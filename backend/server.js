import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config';
import connectCloudinary from './config/cloudnary.js'; './config/cloudinary.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middleware
app.use(express.json());
app.use(cors());//alow fronted to make request

//api endpoints
app.get('/', (req, res) => {
    res.send('API WORkKING ')
});
app.listen(port, () => console.log("Server Started:",port));