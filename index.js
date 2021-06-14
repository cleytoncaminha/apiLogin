const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')
const app = express();
dotenv.config()

/mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true},
(error)=>{if(error)console.log(error)
else console.log('nenhum erro')});

console.log(process.env.PORT)
app.use('/user', userRouter);
app.listen(process.env.PORT, ()=>{console.log('servidor online ')});