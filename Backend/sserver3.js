const express=require('express');
const app=express();
const port=1000;
app.get('/',(req,res)=>res.send("hello world"));
app.listen(port,(error)=>{
    if(!error)
    {
        console.log("server started");
    }
    else
    {
        console.log("server not started");
    }
})