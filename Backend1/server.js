const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
const port=5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/bcet');

const connection=mongoose.connection;
connection.once('open',()=>{
console.log('Database connected');
});

//importing routes
const usersRouter=require('./routes/users');
app.use('/users',usersRouter);

//start server
app.listen(port,()=>{
    console.log('Server Started');
});