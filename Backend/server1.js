const http=require('http'); // http status prerequisite
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("hello");
});
server.listen(4000,()=>{
    console.log('server started');
})