import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config';
import connectCloudinary from './config/cloudnary.js'; 
import adminRouter from './routes/doctorRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middleware
app.use(express.json());
app.use(cors());//alow fronted to make request

//api endpoints
app.use('/api/admin',adminRouter)//localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {
    res.send('API WORkKING ')
});
app.listen(port, () => console.log("Server Started:",port));