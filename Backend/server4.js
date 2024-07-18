const express = require('express');
const app = express();
app.use(express.json())
const Port = 5000;
const data={
    "name":"amit",
    "age":21
}
app.get ('/',function(req,res)
{
res.json(data);
})
app.listen(Port,()=>{
    console.log(`server running at port number ${Port}`);
})