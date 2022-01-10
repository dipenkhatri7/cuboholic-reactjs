const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Nirjal');
})

app.post('/scramble', (req,res)=>{
    
})

app.listen(5000,()=>{
    console.log("Running in server 5000");
})