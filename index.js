
const express = require('express'); 
const app = express();                  
const PORT = process.env.PORT||5000;     
const fs=require('fs');                   
if(!fs.existsSync('./Time')){             
  fs.mkdir('./Time',(err)=>{                
    if(err) throw err;                                 
    console.log('folder created');
  });
}
                    
setInterval(()=>{                               
  fs.appendFile('./Time/Currentdate-time.txt',`\n${new Date().toLocaleTimeString()}`,'utf8',(err)=>{
    if(err) throw err;
    console.log("Data");
  })
},1000)

app.get('/',(req,res)=>{
  res.sendFile('./watch/CurrentTimeStamp.txt',{root:__dirname});
})


app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log("Listening to PORT",PORT);
})