const fs = require('fs');
//asynchronous
const data=fs.readFile('file.txt','utf-8',function(err,data)
{
    console.log(data.toString());
});
let par="heloooooooo"
fs.appendFileSync('file.txt',par,'utf-8');
  
//synchromous
var hello=fs.readFileSync('file.txt','utf-8');
console.log(hello.toString());