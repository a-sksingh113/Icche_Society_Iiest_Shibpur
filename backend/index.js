require('dotenv').config();
const express = require('express')
const connectDB = require('./config/dbConnection');
const cookieParser = require('cookie-parser');

const adminsRoute = require('./routes/adminsRoute')



const app = express();
PORT = process.env.PORT || 8001;
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/admin',adminsRoute);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})